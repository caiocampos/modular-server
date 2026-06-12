import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import axios from 'axios';
import { plainToInstance } from 'class-transformer';
import { ApiToCheck } from './api-to-check';

@Injectable()
export class CheckServicesService {
  private readonly logger = new Logger(CheckServicesService.name);

  constructor() {}

  @Cron('0/6 0-2,8-23 * * 1-5')
  public async CheckServices(): Promise<boolean> {
    const checkAllAPIs = process.env.CHECK_ALL_APIS?.toLowerCase() === 'true';
    let apisToCheck: ApiToCheck[] = [];

    try {
      apisToCheck = plainToInstance(
        ApiToCheck,
        JSON.parse(process.env.APIS_TO_CHECK || '[]') as Array<unknown>,
      );
    } catch (error) {
      this.logger.error('Error casting Env var APIS_TO_CHECK', error);
      return false;
    }
    return checkAllAPIs
      ? this.checkAllAPIs(apisToCheck)
      : this.checkRandomAPI(apisToCheck);
  }

  private async checkAllAPIs(apisToCheck: ApiToCheck[]): Promise<boolean> {
    for (const api of apisToCheck) {
      try {
        await axios.get(api.uri);
      } catch (error) {
        this.logger.error(`Error checking API: ${api.name}`, error);
        return false;
      }
    }
    return true;
  }

  private async checkRandomAPI(apisToCheck: ApiToCheck[]): Promise<boolean> {
    const api = apisToCheck[Math.floor(Math.random() * apisToCheck.length)];
    try {
      await axios.get(api.uri);
    } catch (error) {
      this.logger.error(`Error checking API: ${api.name}`, error);
      return false;
    }
    return true;
  }
}
