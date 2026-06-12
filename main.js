/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const common_1 = __webpack_require__(1);
const core_1 = __webpack_require__(2);
const platform_fastify_1 = __webpack_require__(3);
const helmet_1 = __importDefault(__webpack_require__(4));
const app_module_1 = __webpack_require__(5);
const bootstrap = async () => {
    var _a, _b;
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_fastify_1.FastifyAdapter());
    app.enableCors();
    app.use((0, helmet_1.default)());
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen((_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000, (_b = process.env.ADDRESS) !== null && _b !== void 0 ? _b : 'localhost');
};
bootstrap();


/***/ }),
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("@nestjs/platform-fastify");

/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("helmet");

/***/ }),
/* 5 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(1);
const config_1 = __webpack_require__(6);
const modules_expose_1 = __webpack_require__(7);
const schedule_1 = __webpack_require__(49);
const check_services_module_1 = __webpack_require__(50);
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            schedule_1.ScheduleModule.forRoot(),
            check_services_module_1.CheckServicesModule,
            ...modules_expose_1.moduleList,
        ],
    })
], AppModule);


/***/ }),
/* 6 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 7 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.moduleList = void 0;
const AsteroidScoreModules = __importStar(__webpack_require__(8));
const BlogPostsModules = __importStar(__webpack_require__(22));
const ShrtrModules = __importStar(__webpack_require__(38));
exports.moduleList = [
    ...AsteroidScoreModules.moduleList,
    ...BlogPostsModules.moduleList,
    ...ShrtrModules.moduleList,
];


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.moduleList = void 0;
const mongoose_1 = __webpack_require__(9);
const scores_module_1 = __webpack_require__(10);
const mongoose_connection_1 = __webpack_require__(18);
const utils_1 = __webpack_require__(16);
exports.moduleList = [
    mongoose_1.MongooseModule.forRoot((0, utils_1.forceString)((_a = process.env.MONGO_URI_SCORE) !== null && _a !== void 0 ? _a : process.env.MONGO_URI), {
        connectionName: mongoose_connection_1.connectionName,
    }),
    scores_module_1.ScoresModule,
];


/***/ }),
/* 9 */
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),
/* 10 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ScoresModule = void 0;
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(9);
const score_entity_1 = __webpack_require__(11);
const scores_controller_1 = __webpack_require__(12);
const scores_service_1 = __webpack_require__(13);
const mongoose_connection_1 = __webpack_require__(18);
let ScoresModule = class ScoresModule {
};
exports.ScoresModule = ScoresModule;
exports.ScoresModule = ScoresModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: score_entity_1.Score.name, schema: score_entity_1.ScoreSchema }], mongoose_connection_1.connectionName),
        ],
        providers: [scores_service_1.ScoresService],
        controllers: [scores_controller_1.ScoresController],
        exports: [],
    })
], ScoresModule);


/***/ }),
/* 11 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ScoreSchema = exports.Score = void 0;
const mongoose_1 = __webpack_require__(9);
let Score = class Score {
    constructor(playerName, score, startTime, endTime, difficulty) {
        this.playerName = playerName;
        this.score = score;
        this.startTime = startTime;
        this.endTime = endTime;
        this.difficulty = difficulty;
    }
};
exports.Score = Score;
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    __metadata("design:type", String)
], Score.prototype, "playerName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: Number }),
    __metadata("design:type", Number)
], Score.prototype, "score", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: Date }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], Score.prototype, "startTime", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: Date }),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], Score.prototype, "endTime", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: Number }),
    __metadata("design:type", Number)
], Score.prototype, "difficulty", void 0);
exports.Score = Score = __decorate([
    (0, mongoose_1.Schema)({ collection: 'scores' }),
    __metadata("design:paramtypes", [String, Number, typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object, typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object, Number])
], Score);
exports.ScoreSchema = mongoose_1.SchemaFactory.createForClass(Score);


/***/ }),
/* 12 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ScoresController = void 0;
const common_1 = __webpack_require__(1);
const scores_service_1 = __webpack_require__(13);
const score_add_request_dto_1 = __importDefault(__webpack_require__(19));
let ScoresController = class ScoresController {
    constructor(scoresService) {
        this.scoresService = scoresService;
    }
    findAll(playerName) {
        return this.scoresService.findAll(playerName);
    }
    count() {
        return this.scoresService.count();
    }
    add(requestDto) {
        return this.scoresService.add(requestDto);
    }
};
exports.ScoresController = ScoresController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('playerName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], ScoresController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('count'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], ScoresController.prototype, "count", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof score_add_request_dto_1.default !== "undefined" && score_add_request_dto_1.default) === "function" ? _d : Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], ScoresController.prototype, "add", null);
exports.ScoresController = ScoresController = __decorate([
    (0, common_1.Controller)('score'),
    __metadata("design:paramtypes", [typeof (_a = typeof scores_service_1.ScoresService !== "undefined" && scores_service_1.ScoresService) === "function" ? _a : Object])
], ScoresController);


/***/ }),
/* 13 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var ScoresService_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ScoresService = void 0;
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(9);
const mongoose_2 = __webpack_require__(14);
const score_entity_1 = __webpack_require__(11);
const score_response_dto_1 = __importDefault(__webpack_require__(15));
const utils_1 = __webpack_require__(16);
const mongoose_connection_1 = __webpack_require__(18);
let ScoresService = ScoresService_1 = class ScoresService {
    constructor(scoreModel) {
        this.scoreModel = scoreModel;
        this.logger = new common_1.Logger(ScoresService_1.name);
    }
    async findAll(playerName) {
        try {
            let query = this.scoreModel.find();
            if (playerName) {
                query = query.where('playerName').regex(new RegExp(playerName, 'i'));
            }
            const scores = await query.sort('-score').exec();
            return scores.map(score_response_dto_1.default.from);
        }
        catch (error) {
            throw new common_1.HttpException('Erro ao buscar as pontuações', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async count() {
        try {
            return await this.scoreModel.countDocuments().exec();
        }
        catch (error) {
            throw new common_1.HttpException('Erro ao contar as pontuações', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async add(requestDto) {
        if (!(0, utils_1.testHash)(requestDto)) {
            throw new common_1.HttpException('O hash não é válido', common_1.HttpStatus.BAD_REQUEST);
        }
        try {
            const newScore = new this.scoreModel();
            newScore.playerName = requestDto.playerName;
            newScore.score = requestDto.score;
            newScore.startTime = new Date(requestDto.startTime);
            newScore.endTime = new Date(requestDto.endTime);
            newScore.difficulty = requestDto.difficulty;
            const score = await newScore.save();
            return score_response_dto_1.default.from(score);
        }
        catch (error) {
            throw new common_1.HttpException('Erro ao gravar a pontuação', common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.ScoresService = ScoresService;
exports.ScoresService = ScoresService = ScoresService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(score_entity_1.Score.name, mongoose_connection_1.connectionName)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], ScoresService);


/***/ }),
/* 14 */
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class ScoreResponseDTO {
    constructor(id, playerName, score, creationDate, difficulty) {
        this.id = id;
        this.playerName = playerName;
        this.score = score;
        this.creationDate = creationDate;
        this.difficulty = difficulty;
    }
}
ScoreResponseDTO.from = ({ _id, playerName, score, endTime, difficulty, }) => new ScoreResponseDTO(_id.toHexString(), playerName, score, endTime, difficulty);
exports["default"] = ScoreResponseDTO;


/***/ }),
/* 16 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.forceString = exports.forceNumber = exports.testHash = void 0;
const crypto_1 = __webpack_require__(17);
const saltHash = (object, num, text) => {
    const _a = Object.assign({}, object), { _n, _h } = _a, origin = __rest(_a, ["_n", "_h"]);
    const o = origin;
    o._n = calcSalt((0, exports.forceNumber)(_n || 249));
    o._ns = calcSalt(num || 47);
    o._ts = text || '';
    const hash = (0, crypto_1.createHash)('sha256');
    hash.update(JSON.stringify(o));
    return hash.digest('hex');
};
const coefficient = 1000000;
const calcSalt = (n) => {
    const x = Math.trunc(Math.sin(n) * coefficient);
    const ac = n > -1 && n < 1 ? Math.acos(n) : Math.acos(1 / n);
    const aci = Math.trunc(ac * coefficient);
    return (x + aci).toString();
};
const testHash = (object) => object._h ===
    saltHash(object, (0, exports.forceNumber)(process.env.S_NUM), (0, exports.forceString)(process.env.S_TEXT));
exports.testHash = testHash;
const forceNumber = (num) => Number(num) || 0;
exports.forceNumber = forceNumber;
const forceString = (str) => String(str) || '';
exports.forceString = forceString;


/***/ }),
/* 17 */
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.connectionName = void 0;
exports.connectionName = 'asteroid-score';


/***/ }),
/* 19 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const class_validator_1 = __webpack_require__(20);
const validation_messages_constants_1 = __webpack_require__(21);
class ScoreAddRequestDTO {
    constructor(playerName, score, startTime, endTime, difficulty, _h, _n) {
        this.playerName = playerName;
        this.score = score;
        this.startTime = startTime;
        this.endTime = endTime;
        this.difficulty = difficulty;
        this._h = _h;
        this._n = _n;
    }
}
exports["default"] = ScoreAddRequestDTO;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: validation_messages_constants_1.ValidationMessages.IS_NOT_EMPTY }),
    __metadata("design:type", String)
], ScoreAddRequestDTO.prototype, "playerName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: validation_messages_constants_1.ValidationMessages.IS_NOT_EMPTY }),
    (0, class_validator_1.IsInt)({ message: validation_messages_constants_1.ValidationMessages.IS_NOT_NUMBER }),
    __metadata("design:type", Number)
], ScoreAddRequestDTO.prototype, "score", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: validation_messages_constants_1.ValidationMessages.IS_NOT_EMPTY }),
    (0, class_validator_1.IsDateString)({}, { message: validation_messages_constants_1.ValidationMessages.IS_NOT_DATE }),
    __metadata("design:type", String)
], ScoreAddRequestDTO.prototype, "startTime", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: validation_messages_constants_1.ValidationMessages.IS_NOT_EMPTY }),
    (0, class_validator_1.IsDateString)({}, { message: validation_messages_constants_1.ValidationMessages.IS_NOT_DATE }),
    __metadata("design:type", String)
], ScoreAddRequestDTO.prototype, "endTime", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: validation_messages_constants_1.ValidationMessages.IS_NOT_EMPTY }),
    (0, class_validator_1.IsInt)({ message: validation_messages_constants_1.ValidationMessages.IS_NOT_NUMBER }),
    __metadata("design:type", Number)
], ScoreAddRequestDTO.prototype, "difficulty", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: validation_messages_constants_1.ValidationMessages.IS_NOT_EMPTY }),
    __metadata("design:type", String)
], ScoreAddRequestDTO.prototype, "_h", void 0);


/***/ }),
/* 20 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ValidationMessages = void 0;
exports.ValidationMessages = Object.freeze({
    IS_NOT_EMPTY: 'Campo $property não pode ser vazio.',
    IS_NOT_DATE: 'Campo $property não é uma data válida.',
    IS_NOT_NUMBER: 'Campo $property não é um número válido.',
});


/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.moduleList = void 0;
const mongoose_1 = __webpack_require__(9);
const authors_module_1 = __webpack_require__(23);
const posts_module_1 = __webpack_require__(34);
const mongoose_connection_1 = __webpack_require__(32);
const utils_1 = __webpack_require__(37);
exports.moduleList = [
    mongoose_1.MongooseModule.forRoot((0, utils_1.forceString)((_a = process.env.MONGO_URI_BLOG) !== null && _a !== void 0 ? _a : process.env.MONGO_URI), { connectionName: mongoose_connection_1.connectionName }),
    authors_module_1.AuthorsModule,
    posts_module_1.PostsModule,
];


/***/ }),
/* 23 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthorsModule = void 0;
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(9);
const post_entity_1 = __webpack_require__(24);
const author_entity_1 = __webpack_require__(25);
const authors_controller_1 = __webpack_require__(26);
const authors_service_1 = __webpack_require__(29);
const mongoose_connection_1 = __webpack_require__(32);
let AuthorsModule = class AuthorsModule {
};
exports.AuthorsModule = AuthorsModule;
exports.AuthorsModule = AuthorsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: author_entity_1.Author.name, schema: author_entity_1.AuthorSchema },
                { name: post_entity_1.Post.name, schema: post_entity_1.PostSchema },
            ], mongoose_connection_1.connectionName),
        ],
        providers: [authors_service_1.AuthorsService],
        controllers: [authors_controller_1.AuthorsController],
        exports: [],
    })
], AuthorsModule);


/***/ }),
/* 24 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostSchema = exports.Post = void 0;
const mongoose_1 = __webpack_require__(9);
const mongoose_2 = __webpack_require__(14);
const author_entity_1 = __webpack_require__(25);
let Post = class Post {
    constructor(title, body, creationDate, author) {
        this.title = title;
        this.body = body;
        this.creationDate = creationDate;
        this.author = author;
    }
};
exports.Post = Post;
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    __metadata("design:type", String)
], Post.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    __metadata("design:type", String)
], Post.prototype, "body", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    __metadata("design:type", String)
], Post.prototype, "creationDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.Types.ObjectId, ref: 'Author' }),
    __metadata("design:type", typeof (_b = typeof author_entity_1.AuthorDocument !== "undefined" && author_entity_1.AuthorDocument) === "function" ? _b : Object)
], Post.prototype, "author", void 0);
exports.Post = Post = __decorate([
    (0, mongoose_1.Schema)({ collection: 'posts' }),
    __metadata("design:paramtypes", [String, String, String, typeof (_a = typeof author_entity_1.AuthorDocument !== "undefined" && author_entity_1.AuthorDocument) === "function" ? _a : Object])
], Post);
exports.PostSchema = mongoose_1.SchemaFactory.createForClass(Post);


/***/ }),
/* 25 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthorSchema = exports.Author = void 0;
const mongoose_1 = __webpack_require__(9);
const mongoose_2 = __webpack_require__(14);
let Author = class Author {
    constructor(realname, nickname, birthDate, posts) {
        this.realname = realname;
        this.nickname = nickname;
        this.birthDate = birthDate;
        this.posts = posts;
    }
};
exports.Author = Author;
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    __metadata("design:type", String)
], Author.prototype, "realname", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    __metadata("design:type", String)
], Author.prototype, "nickname", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    __metadata("design:type", String)
], Author.prototype, "birthDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [{ type: mongoose_2.Types.ObjectId, ref: 'Post' }] }),
    __metadata("design:type", typeof (_b = typeof Array !== "undefined" && Array) === "function" ? _b : Object)
], Author.prototype, "posts", void 0);
exports.Author = Author = __decorate([
    (0, mongoose_1.Schema)({ collection: 'authors' }),
    __metadata("design:paramtypes", [String, String, String, typeof (_a = typeof Array !== "undefined" && Array) === "function" ? _a : Object])
], Author);
exports.AuthorSchema = mongoose_1.SchemaFactory.createForClass(Author);


/***/ }),
/* 26 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthorsController = void 0;
const common_1 = __webpack_require__(1);
const post_add_request_dto_1 = __importDefault(__webpack_require__(27));
const authors_service_1 = __webpack_require__(29);
const author_add_request_dto_1 = __importDefault(__webpack_require__(33));
let AuthorsController = class AuthorsController {
    constructor(authorsService) {
        this.authorsService = authorsService;
    }
    count() {
        return this.authorsService.count();
    }
    findAll() {
        return this.authorsService.findAll();
    }
    add(requestDto) {
        return this.authorsService.add(requestDto);
    }
    addPost(id, requestDto) {
        return this.authorsService.addPost(id, requestDto);
    }
    delete(id) {
        return this.authorsService.delete(id);
    }
};
exports.AuthorsController = AuthorsController;
__decorate([
    (0, common_1.Get)('count'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], AuthorsController.prototype, "count", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], AuthorsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof author_add_request_dto_1.default !== "undefined" && author_add_request_dto_1.default) === "function" ? _d : Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], AuthorsController.prototype, "add", null);
__decorate([
    (0, common_1.Post)(':id/posts'),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_f = typeof post_add_request_dto_1.default !== "undefined" && post_add_request_dto_1.default) === "function" ? _f : Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], AuthorsController.prototype, "addPost", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AuthorsController.prototype, "delete", null);
exports.AuthorsController = AuthorsController = __decorate([
    (0, common_1.Controller)('authors'),
    __metadata("design:paramtypes", [typeof (_a = typeof authors_service_1.AuthorsService !== "undefined" && authors_service_1.AuthorsService) === "function" ? _a : Object])
], AuthorsController);


/***/ }),
/* 27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const class_validator_1 = __webpack_require__(20);
const validation_messages_constants_1 = __webpack_require__(28);
class PostAddRequestDTO {
    constructor(title, body) {
        this.title = title;
        this.body = body;
    }
}
exports["default"] = PostAddRequestDTO;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: validation_messages_constants_1.ValidationMessages.IS_NOT_EMPTY }),
    __metadata("design:type", String)
], PostAddRequestDTO.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: validation_messages_constants_1.ValidationMessages.IS_NOT_EMPTY }),
    __metadata("design:type", String)
], PostAddRequestDTO.prototype, "body", void 0);


/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ValidationMessages = void 0;
exports.ValidationMessages = Object.freeze({
    IS_NOT_EMPTY: 'Campo $property não pode ser vazio.',
    IS_NOT_DATE: 'Campo $property não é uma data válida.',
});


/***/ }),
/* 29 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var AuthorsService_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthorsService = void 0;
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(9);
const class_validator_1 = __webpack_require__(20);
const mongoose_2 = __webpack_require__(14);
const post_response_dto_1 = __importDefault(__webpack_require__(30));
const post_entity_1 = __webpack_require__(24);
const author_entity_1 = __webpack_require__(25);
const author_response_dto_1 = __importDefault(__webpack_require__(31));
const mongoose_connection_1 = __webpack_require__(32);
const { ObjectId } = mongoose_2.Types;
let AuthorsService = AuthorsService_1 = class AuthorsService {
    constructor(authorModel, postModel) {
        this.authorModel = authorModel;
        this.postModel = postModel;
        this.logger = new common_1.Logger(AuthorsService_1.name);
    }
    async count() {
        try {
            return await this.authorModel.countDocuments().exec();
        }
        catch (error) {
            throw new common_1.HttpException('Erro ao contar os autores', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findAll() {
        try {
            const authors = await this.authorModel.find().exec();
            return authors.map(author_response_dto_1.default.from);
        }
        catch (error) {
            throw new common_1.HttpException('Erro ao buscar os autores', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findOne(id) {
        const _id = new ObjectId(id);
        const author = await this.authorModel.findById(_id).exec();
        if (author === null) {
            return null;
        }
        return author_response_dto_1.default.from(author);
    }
    async add(requestDto) {
        await (0, class_validator_1.validateOrReject)(requestDto);
        try {
            const newAuthor = new this.authorModel();
            newAuthor.realname = requestDto.name;
            newAuthor.nickname = requestDto.nickname;
            newAuthor.birthDate = requestDto.birthDate;
            const author = await newAuthor.save();
            return author_response_dto_1.default.from(author);
        }
        catch (error) {
            throw new common_1.HttpException('Erro ao gravar o autor', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async addPost(id, requestDto) {
        await (0, class_validator_1.validateOrReject)(requestDto);
        try {
            const newPost = new this.postModel(requestDto);
            const _id = new ObjectId(id);
            const author = await this.authorModel.findById(_id).exec();
            if (author === null) {
                throw new common_1.HttpException('Erro ao gravar a postagem, author não encontrado', common_1.HttpStatus.NOT_FOUND);
            }
            newPost.author = author;
            newPost.creationDate = new Date().toISOString().slice(0, 10);
            const post = await newPost.save();
            return post_response_dto_1.default.from(post);
        }
        catch (error) {
            throw new common_1.HttpException('Erro ao gravar a postagem', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async delete(id) {
        try {
            const _id = new ObjectId(id);
            await this.postModel.deleteMany({ author: { $eq: _id } }).exec();
            return await this.authorModel.findByIdAndDelete(_id).exec();
        }
        catch (error) {
            throw new common_1.HttpException('Erro ao apagar o autor', common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.AuthorsService = AuthorsService;
exports.AuthorsService = AuthorsService = AuthorsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(author_entity_1.Author.name, mongoose_connection_1.connectionName)),
    __param(1, (0, mongoose_1.InjectModel)(post_entity_1.Post.name, mongoose_connection_1.connectionName)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _b : Object])
], AuthorsService);


/***/ }),
/* 30 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const author_response_dto_1 = __importDefault(__webpack_require__(31));
class PostResponseDTO {
    constructor(id, title, body, creationDate, author) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.creationDate = creationDate;
        this.author = author;
    }
}
PostResponseDTO.from = ({ _id, title, body, creationDate, author, }) => new PostResponseDTO(_id.toHexString(), title, body, creationDate, author_response_dto_1.default.from(author));
exports["default"] = PostResponseDTO;


/***/ }),
/* 31 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class AuthorResponseDTO {
    constructor(id, name, nickname, birthDate, posts) {
        this.id = id;
        this.name = name;
        this.nickname = nickname;
        this.birthDate = birthDate;
        this.posts = posts;
    }
}
AuthorResponseDTO.from = ({ _id, realname, nickname, birthDate, posts, }) => new AuthorResponseDTO(_id.toHexString(), realname, nickname, birthDate, posts);
exports["default"] = AuthorResponseDTO;


/***/ }),
/* 32 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.connectionName = void 0;
exports.connectionName = 'blog-posts';


/***/ }),
/* 33 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const class_validator_1 = __webpack_require__(20);
const validation_messages_constants_1 = __webpack_require__(28);
class AuthorAddRequestDTO {
    constructor(name, nickname, birthDate) {
        this.name = name;
        this.nickname = nickname;
        this.birthDate = birthDate;
    }
}
exports["default"] = AuthorAddRequestDTO;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: validation_messages_constants_1.ValidationMessages.IS_NOT_EMPTY }),
    __metadata("design:type", String)
], AuthorAddRequestDTO.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: validation_messages_constants_1.ValidationMessages.IS_NOT_EMPTY }),
    __metadata("design:type", String)
], AuthorAddRequestDTO.prototype, "nickname", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: validation_messages_constants_1.ValidationMessages.IS_NOT_EMPTY }),
    (0, class_validator_1.IsDateString)({}, { message: validation_messages_constants_1.ValidationMessages.IS_NOT_EMPTY }),
    __metadata("design:type", String)
], AuthorAddRequestDTO.prototype, "birthDate", void 0);


/***/ }),
/* 34 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostsModule = void 0;
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(9);
const author_entity_1 = __webpack_require__(25);
const post_entity_1 = __webpack_require__(24);
const posts_controller_1 = __webpack_require__(35);
const posts_service_1 = __webpack_require__(36);
const mongoose_connection_1 = __webpack_require__(32);
let PostsModule = class PostsModule {
};
exports.PostsModule = PostsModule;
exports.PostsModule = PostsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: author_entity_1.Author.name, schema: author_entity_1.AuthorSchema },
                { name: post_entity_1.Post.name, schema: post_entity_1.PostSchema },
            ], mongoose_connection_1.connectionName),
        ],
        providers: [posts_service_1.PostsService],
        controllers: [posts_controller_1.PostsController],
        exports: [],
    })
], PostsModule);


/***/ }),
/* 35 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostsController = void 0;
const common_1 = __webpack_require__(1);
const posts_service_1 = __webpack_require__(36);
let PostsController = class PostsController {
    constructor(postsService) {
        this.postsService = postsService;
    }
    findAll(authorName) {
        return this.postsService.findAll(authorName);
    }
    delete(id) {
        return this.postsService.delete(id);
    }
};
exports.PostsController = PostsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('authorName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], PostsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "delete", null);
exports.PostsController = PostsController = __decorate([
    (0, common_1.Controller)('posts'),
    __metadata("design:paramtypes", [typeof (_a = typeof posts_service_1.PostsService !== "undefined" && posts_service_1.PostsService) === "function" ? _a : Object])
], PostsController);


/***/ }),
/* 36 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var PostsService_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostsService = void 0;
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(9);
const mongoose_2 = __webpack_require__(14);
const post_entity_1 = __webpack_require__(24);
const post_response_dto_1 = __importDefault(__webpack_require__(30));
const author_entity_1 = __webpack_require__(25);
const mongoose_connection_1 = __webpack_require__(32);
let PostsService = PostsService_1 = class PostsService {
    constructor(authorModel, postModel) {
        this.authorModel = authorModel;
        this.postModel = postModel;
        this.logger = new common_1.Logger(PostsService_1.name);
    }
    async findAll(authorName) {
        try {
            let query = this.postModel.find();
            if (authorName) {
                const authors = await this.authorModel
                    .find()
                    .where('realname')
                    .regex(new RegExp(authorName, 'i'))
                    .select('id')
                    .exec();
                query = query.where('author').in(authors.map((author) => author._id));
            }
            const posts = await query.populate('author').sort('-creationDate').exec();
            return posts.map(post_response_dto_1.default.from);
        }
        catch (error) {
            throw new common_1.HttpException('Erro ao buscar as postagens', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async delete(id) {
        try {
            const _id = new mongoose_2.Types.ObjectId(id);
            return await this.postModel.findByIdAndDelete(_id).exec();
        }
        catch (error) {
            throw new common_1.HttpException('Erro ao apagar a postagem', common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.PostsService = PostsService;
exports.PostsService = PostsService = PostsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(author_entity_1.Author.name, mongoose_connection_1.connectionName)),
    __param(1, (0, mongoose_1.InjectModel)(post_entity_1.Post.name, mongoose_connection_1.connectionName)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _b : Object])
], PostsService);


/***/ }),
/* 37 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.forceString = exports.forceNumber = void 0;
const forceNumber = (num) => Number(num) || 0;
exports.forceNumber = forceNumber;
const forceString = (str) => String(str) || '';
exports.forceString = forceString;


/***/ }),
/* 38 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.moduleList = void 0;
const mongoose_1 = __webpack_require__(9);
const links_module_1 = __webpack_require__(39);
const mongoose_connection_1 = __webpack_require__(44);
const utils_1 = __webpack_require__(48);
exports.moduleList = [
    mongoose_1.MongooseModule.forRoot((0, utils_1.forceString)((_a = process.env.MONGO_URI_SHRTR) !== null && _a !== void 0 ? _a : process.env.MONGO_URI), { connectionName: mongoose_connection_1.connectionName }),
    links_module_1.LinksModule,
];


/***/ }),
/* 39 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LinksModule = void 0;
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(9);
const link_entity_1 = __webpack_require__(40);
const links_controller_1 = __webpack_require__(41);
const links_service_1 = __webpack_require__(42);
const mongoose_connection_1 = __webpack_require__(44);
let LinksModule = class LinksModule {
};
exports.LinksModule = LinksModule;
exports.LinksModule = LinksModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: link_entity_1.Link.name, schema: link_entity_1.LinkSchema }], mongoose_connection_1.connectionName),
        ],
        providers: [links_service_1.LinksService],
        controllers: [links_controller_1.LinksController],
        exports: [],
    })
], LinksModule);


/***/ }),
/* 40 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LinkSchema = exports.Link = void 0;
const mongoose_1 = __webpack_require__(9);
let Link = class Link {
    constructor(shrt, link) {
        this.shrt = shrt;
        this.link = link;
    }
};
exports.Link = Link;
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    __metadata("design:type", String)
], Link.prototype, "shrt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    __metadata("design:type", String)
], Link.prototype, "link", void 0);
exports.Link = Link = __decorate([
    (0, mongoose_1.Schema)({ collection: 'link' }),
    __metadata("design:paramtypes", [String, String])
], Link);
exports.LinkSchema = mongoose_1.SchemaFactory.createForClass(Link);


/***/ }),
/* 41 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var LinksController_1;
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LinksController = void 0;
const common_1 = __webpack_require__(1);
const links_service_1 = __webpack_require__(42);
const link_add_request_dto_1 = __importDefault(__webpack_require__(45));
const http_interfaces_1 = __webpack_require__(47);
let LinksController = LinksController_1 = class LinksController {
    constructor(linksService) {
        this.linksService = linksService;
        this.logger = new common_1.Logger(LinksController_1.name);
    }
    async findAll() {
        try {
            return await this.linksService.findAll();
        }
        catch (err) {
            this.logger.error(err);
            throw new common_1.HttpException(err.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async find(response, shrt) {
        const redirectToError = () => response.status(302).redirect(`${process.env.SHRTR_HOME}?error`);
        try {
            const data = await this.linksService.findOneByShrt(shrt);
            if ((data === null || data === void 0 ? void 0 : data.link) !== undefined) {
                let { link } = data;
                link = /https?:\/\//.test(link) ? link : `http://${link}`;
                response.status(302).redirect(link);
                return;
            }
            this.logger.error('Not found');
            redirectToError();
            return;
        }
        catch (err) {
            this.logger.error(err);
            redirectToError();
        }
    }
    async count() {
        try {
            return await this.linksService.count();
        }
        catch (err) {
            this.logger.error(err);
            throw new common_1.HttpException(err.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async add(requestDto) {
        try {
            const result = await this.linksService.generate(requestDto);
            return result;
        }
        catch (err) {
            this.logger.error(err);
            throw new common_1.HttpException(err.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.LinksController = LinksController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], LinksController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('@/:shrt'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('shrt')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof http_interfaces_1.ApiResponse !== "undefined" && http_interfaces_1.ApiResponse) === "function" ? _c : Object, String]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], LinksController.prototype, "find", null);
__decorate([
    (0, common_1.Get)('count'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], LinksController.prototype, "count", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof link_add_request_dto_1.default !== "undefined" && link_add_request_dto_1.default) === "function" ? _f : Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], LinksController.prototype, "add", null);
exports.LinksController = LinksController = LinksController_1 = __decorate([
    (0, common_1.Controller)('links'),
    __metadata("design:paramtypes", [typeof (_a = typeof links_service_1.LinksService !== "undefined" && links_service_1.LinksService) === "function" ? _a : Object])
], LinksController);


/***/ }),
/* 42 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var LinksService_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LinksService = void 0;
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(9);
const mongoose_2 = __webpack_require__(14);
const link_entity_1 = __webpack_require__(40);
const link_response_dto_1 = __importDefault(__webpack_require__(43));
const mongoose_connection_1 = __webpack_require__(44);
const { ObjectId } = mongoose_2.Types;
let LinksService = LinksService_1 = class LinksService {
    constructor(linkModel) {
        this.linkModel = linkModel;
        this.logger = new common_1.Logger(LinksService_1.name);
    }
    async findOneByShrt(shrt) {
        try {
            const link = await this.linkModel.findOne({ shrt }).exec();
            if (link === null) {
                return null;
            }
            return link_response_dto_1.default.from(link);
        }
        catch (error) {
            const message = 'Error finding the link by alias';
            this.logger.error(message, error);
            throw new common_1.HttpException(message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findOne(id) {
        try {
            const _id = new ObjectId(id);
            const link = await this.linkModel.findById(_id).exec();
            if (link === null) {
                return null;
            }
            return link_response_dto_1.default.from(link);
        }
        catch (error) {
            const message = 'Error finding the link';
            this.logger.error(message, error);
            throw new common_1.HttpException(message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findAll() {
        try {
            const links = await this.linkModel.find().exec();
            return links.map(link_response_dto_1.default.from);
        }
        catch (error) {
            const message = 'Error finding links';
            this.logger.error(message, error);
            throw new common_1.HttpException(message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async existsByShrt(shrt) {
        return await this.exists({ shrt });
    }
    async exists(query) {
        var _a;
        try {
            return ((_a = (await this.linkModel.exists(query))) === null || _a === void 0 ? void 0 : _a._id) !== undefined;
        }
        catch (error) {
            const message = 'Error validating existence of the link';
            this.logger.error(message, error);
            throw new common_1.HttpException(message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async count() {
        try {
            return await this.linkModel.countDocuments().exec();
        }
        catch (error) {
            const message = 'Error counting links';
            this.logger.error(message, error);
            throw new common_1.HttpException(message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async add(requestDto) {
        var _a;
        try {
            const newLink = new this.linkModel();
            newLink.link = requestDto.link;
            newLink.shrt = (_a = requestDto.shrt) !== null && _a !== void 0 ? _a : "";
            const link = await newLink.save();
            return link_response_dto_1.default.from(link);
        }
        catch (error) {
            const message = 'Error adding the link';
            this.logger.error(message, error);
            throw new common_1.HttpException(message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async generate(requestDto, recursion = false) {
        const regenerate = () => {
            const shrt = (Math.random() * 9007199254740991)
                .toString(36)
                .replace('.', 'A');
            return this.generate(Object.assign(Object.assign({}, requestDto), { shrt }), true);
        };
        try {
            if (requestDto.shrt !== undefined && requestDto.shrt.length > 0) {
                const exists = await this.existsByShrt(requestDto.shrt);
                if (exists) {
                    if (recursion) {
                        return regenerate();
                    }
                    const message = 'The alias already exists, please try another';
                    this.logger.error(message);
                    return Promise.reject(new common_1.HttpException(message, common_1.HttpStatus.BAD_REQUEST));
                }
                return this.add(requestDto);
            }
            return regenerate();
        }
        catch (error) {
            const message = 'Error recording the link';
            this.logger.error(message, error);
            throw new common_1.HttpException(message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.LinksService = LinksService;
exports.LinksService = LinksService = LinksService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(link_entity_1.Link.name, mongoose_connection_1.connectionName)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], LinksService);


/***/ }),
/* 43 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class LinkResponseDTO {
    constructor(id, link, shrt) {
        this.id = id;
        this.link = link;
        this.shrt = shrt;
    }
}
LinkResponseDTO.from = ({ _id, link, shrt }) => new LinkResponseDTO(_id.toHexString(), link, shrt);
exports["default"] = LinkResponseDTO;


/***/ }),
/* 44 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.connectionName = void 0;
exports.connectionName = 'shrtr';


/***/ }),
/* 45 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const class_validator_1 = __webpack_require__(20);
const validation_messages_constants_1 = __webpack_require__(46);
class LinkAddRequestDTO {
    constructor(link, shrt) {
        this.shrt = shrt;
        this.link = link;
    }
}
exports["default"] = LinkAddRequestDTO;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: validation_messages_constants_1.ValidationMessages.IS_NOT_EMPTY }),
    __metadata("design:type", String)
], LinkAddRequestDTO.prototype, "link", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], LinkAddRequestDTO.prototype, "shrt", void 0);


/***/ }),
/* 46 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ValidationMessages = void 0;
exports.ValidationMessages = Object.freeze({
    IS_NOT_EMPTY: 'Campo $property não pode ser vazio.',
    IS_NOT_DATE: 'Campo $property não é uma data válida.',
    IS_NOT_NUMBER: 'Campo $property não é um número válido.',
});


/***/ }),
/* 47 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 48 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.forceString = exports.forceNumber = void 0;
const forceNumber = (num) => Number(num) || 0;
exports.forceNumber = forceNumber;
const forceString = (str) => String(str) || '';
exports.forceString = forceString;


/***/ }),
/* 49 */
/***/ ((module) => {

module.exports = require("@nestjs/schedule");

/***/ }),
/* 50 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CheckServicesModule = void 0;
const common_1 = __webpack_require__(1);
const check_services_service_1 = __webpack_require__(51);
let CheckServicesModule = class CheckServicesModule {
};
exports.CheckServicesModule = CheckServicesModule;
exports.CheckServicesModule = CheckServicesModule = __decorate([
    (0, common_1.Module)({
        providers: [check_services_service_1.CheckServicesService],
        exports: [],
    })
], CheckServicesModule);


/***/ }),
/* 51 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var CheckServicesService_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CheckServicesService = void 0;
const common_1 = __webpack_require__(1);
const schedule_1 = __webpack_require__(49);
const axios_1 = __importDefault(__webpack_require__(52));
const class_transformer_1 = __webpack_require__(53);
const api_to_check_1 = __webpack_require__(54);
let CheckServicesService = CheckServicesService_1 = class CheckServicesService {
    constructor() {
        this.logger = new common_1.Logger(CheckServicesService_1.name);
    }
    async CheckServices() {
        var _a;
        const checkAllAPIs = ((_a = process.env.CHECK_ALL_APIS) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === 'true';
        let apisToCheck = [];
        try {
            apisToCheck = (0, class_transformer_1.plainToInstance)(api_to_check_1.ApiToCheck, JSON.parse(process.env.APIS_TO_CHECK || '[]'));
        }
        catch (error) {
            this.logger.error('Error casting Env var APIS_TO_CHECK', error);
            return false;
        }
        return checkAllAPIs
            ? this.checkAllAPIs(apisToCheck)
            : this.checkRandomAPI(apisToCheck);
    }
    async checkAllAPIs(apisToCheck) {
        for (const api of apisToCheck) {
            try {
                await axios_1.default.get(api.uri);
            }
            catch (error) {
                this.logger.error(`Error checking API: ${api.name}`, error);
                return false;
            }
        }
        return true;
    }
    async checkRandomAPI(apisToCheck) {
        const api = apisToCheck[Math.floor(Math.random() * apisToCheck.length)];
        try {
            await axios_1.default.get(api.uri);
        }
        catch (error) {
            this.logger.error(`Error checking API: ${api.name}`, error);
            return false;
        }
        return true;
    }
};
exports.CheckServicesService = CheckServicesService;
__decorate([
    (0, schedule_1.Cron)('0/6 0-2,8-23 * * 1-5'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], CheckServicesService.prototype, "CheckServices", null);
exports.CheckServicesService = CheckServicesService = CheckServicesService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], CheckServicesService);


/***/ }),
/* 52 */
/***/ ((module) => {

module.exports = require("axios");

/***/ }),
/* 53 */
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),
/* 54 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiToCheck = void 0;
class ApiToCheck {
    constructor(name, uri) {
        this.name = name;
        this.uri = uri;
    }
}
exports.ApiToCheck = ApiToCheck;


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	
/******/ })()
;