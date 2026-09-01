(() => {
"use strict";
var __webpack_modules__ = ({
5(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AppModule: () => (AppModule)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(1);
/* import */ var _nestjs_common__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__rspack_import_0);
/* import */ var _nestjs_config__rspack_import_1 = __webpack_require__(6);
/* import */ var _nestjs_config__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_nestjs_config__rspack_import_1);
/* import */ var _modules_expose__rspack_import_2 = __webpack_require__(7);
/* import */ var _nestjs_schedule__rspack_import_3 = __webpack_require__(94);
/* import */ var _nestjs_schedule__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(_nestjs_schedule__rspack_import_3);
/* import */ var _modules_check_services_check_services_module__rspack_import_4 = __webpack_require__(95);
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}





class AppModule {
}
AppModule = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Module)({
        imports: [
            _nestjs_config__rspack_import_1.ConfigModule.forRoot(),
            _nestjs_schedule__rspack_import_3.ScheduleModule.forRoot(),
            _modules_check_services_check_services_module__rspack_import_4.CheckServicesModule,
            ..._modules_expose__rspack_import_2.moduleList
        ]
    })
], AppModule);


},
7(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  moduleList: () => (moduleList)
});
/* import */ var _modules_asteroid_score_modules_expose__rspack_import_0 = __webpack_require__(8);
/* import */ var _modules_blog_posts_modules_expose__rspack_import_1 = __webpack_require__(22);
/* import */ var _modules_shrtr_modules_expose__rspack_import_2 = __webpack_require__(38);
/* import */ var _modules_restaurantes_app_modules_expose__rspack_import_3 = __webpack_require__(49);




const moduleList = [
    ..._modules_asteroid_score_modules_expose__rspack_import_0.moduleList,
    ..._modules_blog_posts_modules_expose__rspack_import_1.moduleList,
    ..._modules_shrtr_modules_expose__rspack_import_2.moduleList,
    ..._modules_restaurantes_app_modules_expose__rspack_import_3.moduleList
];


},
21(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ValidationMessages: () => (ValidationMessages)
});
const ValidationMessages = Object.freeze({
    IS_NOT_EMPTY: 'Campo $property não pode ser vazio.',
    IS_NOT_DATE: 'Campo $property não é uma data válida.',
    IS_NOT_NUMBER: 'Campo $property não é um número válido.'
});


},
16(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  forceNumber: () => (forceNumber),
  forceString: () => (forceString),
  testHash: () => (testHash)
});
/* import */ var crypto__rspack_import_0 = __webpack_require__(17);
/* import */ var crypto__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(crypto__rspack_import_0);

const saltHash = (object, num, text)=>{
    const { _n, _h, ...origin } = {
        ...object
    };
    const o = origin;
    o._n = calcSalt(forceNumber(_n || 249));
    o._ns = calcSalt(num || 47);
    o._ts = text || '';
    const hash = (0,crypto__rspack_import_0.createHash)('sha256');
    hash.update(JSON.stringify(o));
    return hash.digest('hex');
};
const coefficient = 1000000;
const calcSalt = (n)=>{
    const x = Math.trunc(Math.sin(n) * coefficient);
    const ac = n > -1 && n < 1 ? Math.acos(n) : Math.acos(1 / n);
    const aci = Math.trunc(ac * coefficient);
    return (x + aci).toString();
};
const testHash = (object)=>object._h === saltHash(object, forceNumber(process.env.S_NUM), forceString(process.env.S_TEXT));
const forceNumber = (num)=>Number(num) || 0;
const forceString = (str)=>String(str) || '';


},
8(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  moduleList: () => (moduleList)
});
/* import */ var _nestjs_mongoose__rspack_import_0 = __webpack_require__(9);
/* import */ var _nestjs_mongoose__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__rspack_import_0);
/* import */ var _modules_scores_scores_module__rspack_import_1 = __webpack_require__(10);
/* import */ var _mongoose_connection__rspack_import_2 = __webpack_require__(18);
/* import */ var _common_utils__rspack_import_3 = __webpack_require__(16);




const moduleList = [
    _nestjs_mongoose__rspack_import_0.MongooseModule.forRoot((0,_common_utils__rspack_import_3.forceString)(process.env.MONGO_URI_SCORE ?? process.env.MONGO_URI), {
        connectionName: _mongoose_connection__rspack_import_2.connectionName
    }),
    _modules_scores_scores_module__rspack_import_1.ScoresModule
];


},
19(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ScoreAddRequestDTO: () => (ScoreAddRequestDTO)
});
/* import */ var class_validator__rspack_import_0 = __webpack_require__(20);
/* import */ var class_validator__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(class_validator__rspack_import_0);
/* import */ var _common_messages_validation_messages_constants__rspack_import_1 = __webpack_require__(21);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}


class ScoreAddRequestDTO {
    constructor(){
        _define_property(this, "playerName", void 0);
        _define_property(this, "score", void 0);
        _define_property(this, "startTime", void 0);
        _define_property(this, "endTime", void 0);
        _define_property(this, "difficulty", void 0);
        _define_property(this, "_n", void 0);
        _define_property(this, "_h", void 0);
    }
}
_ts_decorate([
    (0,class_validator__rspack_import_0.IsString)(),
    (0,class_validator__rspack_import_0.IsNotEmpty)({
        message: _common_messages_validation_messages_constants__rspack_import_1.ValidationMessages.IS_NOT_EMPTY
    }),
    _ts_metadata("design:type", String)
], ScoreAddRequestDTO.prototype, "playerName", void 0);
_ts_decorate([
    (0,class_validator__rspack_import_0.IsInt)({
        message: _common_messages_validation_messages_constants__rspack_import_1.ValidationMessages.IS_NOT_NUMBER
    }),
    (0,class_validator__rspack_import_0.IsNotEmpty)({
        message: _common_messages_validation_messages_constants__rspack_import_1.ValidationMessages.IS_NOT_EMPTY
    }),
    _ts_metadata("design:type", Number)
], ScoreAddRequestDTO.prototype, "score", void 0);
_ts_decorate([
    (0,class_validator__rspack_import_0.IsString)(),
    (0,class_validator__rspack_import_0.IsNotEmpty)({
        message: _common_messages_validation_messages_constants__rspack_import_1.ValidationMessages.IS_NOT_EMPTY
    }),
    (0,class_validator__rspack_import_0.IsDateString)({}, {
        message: _common_messages_validation_messages_constants__rspack_import_1.ValidationMessages.IS_NOT_DATE
    }),
    _ts_metadata("design:type", String)
], ScoreAddRequestDTO.prototype, "startTime", void 0);
_ts_decorate([
    (0,class_validator__rspack_import_0.IsString)(),
    (0,class_validator__rspack_import_0.IsNotEmpty)({
        message: _common_messages_validation_messages_constants__rspack_import_1.ValidationMessages.IS_NOT_EMPTY
    }),
    (0,class_validator__rspack_import_0.IsDateString)({}, {
        message: _common_messages_validation_messages_constants__rspack_import_1.ValidationMessages.IS_NOT_DATE
    }),
    _ts_metadata("design:type", String)
], ScoreAddRequestDTO.prototype, "endTime", void 0);
_ts_decorate([
    (0,class_validator__rspack_import_0.IsInt)({
        message: _common_messages_validation_messages_constants__rspack_import_1.ValidationMessages.IS_NOT_NUMBER
    }),
    (0,class_validator__rspack_import_0.IsNotEmpty)({
        message: _common_messages_validation_messages_constants__rspack_import_1.ValidationMessages.IS_NOT_EMPTY
    }),
    _ts_metadata("design:type", Number)
], ScoreAddRequestDTO.prototype, "difficulty", void 0);
_ts_decorate([
    (0,class_validator__rspack_import_0.IsNumber)(),
    (0,class_validator__rspack_import_0.IsOptional)(),
    _ts_metadata("design:type", Number)
], ScoreAddRequestDTO.prototype, "_n", void 0);
_ts_decorate([
    (0,class_validator__rspack_import_0.IsString)(),
    (0,class_validator__rspack_import_0.IsNotEmpty)({
        message: _common_messages_validation_messages_constants__rspack_import_1.ValidationMessages.IS_NOT_EMPTY
    }),
    _ts_metadata("design:type", String)
], ScoreAddRequestDTO.prototype, "_h", void 0);


},
15(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ScoreResponseDTO: () => (ScoreResponseDTO)
});
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
class ScoreResponseDTO {
    constructor(id, playerName, score, creationDate, difficulty){
        _define_property(this, "id", void 0);
        _define_property(this, "playerName", void 0);
        _define_property(this, "score", void 0);
        _define_property(this, "creationDate", void 0);
        _define_property(this, "difficulty", void 0);
        this.id = id;
        this.playerName = playerName;
        this.score = score;
        this.creationDate = creationDate;
        this.difficulty = difficulty;
    }
}
_define_property(ScoreResponseDTO, "from", ({ _id, playerName, score, endTime, difficulty })=>new ScoreResponseDTO(_id.toHexString(), playerName, score, endTime, difficulty));


},
11(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Score: () => (Score),
  ScoreSchema: () => (ScoreSchema)
});
/* import */ var _nestjs_mongoose__rspack_import_0 = __webpack_require__(9);
/* import */ var _nestjs_mongoose__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__rspack_import_0);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}

class Score {
    constructor(playerName, score, startTime, endTime, difficulty){
        _define_property(this, "playerName", void 0);
        _define_property(this, "score", void 0);
        _define_property(this, "startTime", void 0);
        _define_property(this, "endTime", void 0);
        _define_property(this, "difficulty", void 0);
        this.playerName = playerName;
        this.score = score;
        this.startTime = startTime;
        this.endTime = endTime;
        this.difficulty = difficulty;
    }
}
_ts_decorate([
    (0,_nestjs_mongoose__rspack_import_0.Prop)({
        required: true,
        type: String
    }),
    _ts_metadata("design:type", String)
], Score.prototype, "playerName", void 0);
_ts_decorate([
    (0,_nestjs_mongoose__rspack_import_0.Prop)({
        required: true,
        type: Number
    }),
    _ts_metadata("design:type", Number)
], Score.prototype, "score", void 0);
_ts_decorate([
    (0,_nestjs_mongoose__rspack_import_0.Prop)({
        required: true,
        type: Date
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], Score.prototype, "startTime", void 0);
_ts_decorate([
    (0,_nestjs_mongoose__rspack_import_0.Prop)({
        required: true,
        type: Date
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], Score.prototype, "endTime", void 0);
_ts_decorate([
    (0,_nestjs_mongoose__rspack_import_0.Prop)({
        required: true,
        type: Number
    }),
    _ts_metadata("design:type", Number)
], Score.prototype, "difficulty", void 0);
Score = _ts_decorate([
    (0,_nestjs_mongoose__rspack_import_0.Schema)({
        collection: 'scores'
    }),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        Number,
        typeof Date === "undefined" ? Object : Date,
        typeof Date === "undefined" ? Object : Date,
        Number
    ])
], Score);
const ScoreSchema = _nestjs_mongoose__rspack_import_0.SchemaFactory.createForClass(Score);


},
12(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ScoresController: () => (ScoresController)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(1);
/* import */ var _nestjs_common__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__rspack_import_0);
/* import */ var _scores_service__rspack_import_1 = __webpack_require__(13);
/* import */ var _dto_score_add_request_dto__rspack_import_2 = __webpack_require__(19);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}



class ScoresController {
    findAll(playerName) {
        return this.scoresService.findAll(playerName);
    }
    count() {
        return this.scoresService.count();
    }
    add(requestDto) {
        return this.scoresService.add(requestDto);
    }
    constructor(scoresService){
        _define_property(this, "scoresService", void 0);
        this.scoresService = scoresService;
    }
}
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.Get)(),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Query)('playerName')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", typeof Promise === "undefined" ? Object : Promise)
], ScoresController.prototype, "findAll", null);
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.Get)('count'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", typeof Promise === "undefined" ? Object : Promise)
], ScoresController.prototype, "count", null);
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.Post)(),
    (0,_nestjs_common__rspack_import_0.HttpCode)(201),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _dto_score_add_request_dto__rspack_import_2.ScoreAddRequestDTO === "undefined" ? Object : _dto_score_add_request_dto__rspack_import_2.ScoreAddRequestDTO
    ]),
    _ts_metadata("design:returntype", typeof Promise === "undefined" ? Object : Promise)
], ScoresController.prototype, "add", null);
ScoresController = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Controller)('score'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _scores_service__rspack_import_1.ScoresService === "undefined" ? Object : _scores_service__rspack_import_1.ScoresService
    ])
], ScoresController);


},
10(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ScoresModule: () => (ScoresModule)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(1);
/* import */ var _nestjs_common__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__rspack_import_0);
/* import */ var _nestjs_mongoose__rspack_import_1 = __webpack_require__(9);
/* import */ var _nestjs_mongoose__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__rspack_import_1);
/* import */ var _score_entity__rspack_import_2 = __webpack_require__(11);
/* import */ var _scores_controller__rspack_import_3 = __webpack_require__(12);
/* import */ var _scores_service__rspack_import_4 = __webpack_require__(13);
/* import */ var _mongoose_connection__rspack_import_5 = __webpack_require__(18);
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}






class ScoresModule {
}
ScoresModule = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Module)({
        imports: [
            _nestjs_mongoose__rspack_import_1.MongooseModule.forFeature([
                {
                    name: _score_entity__rspack_import_2.Score.name,
                    schema: _score_entity__rspack_import_2.ScoreSchema
                }
            ], _mongoose_connection__rspack_import_5.connectionName)
        ],
        providers: [
            _scores_service__rspack_import_4.ScoresService
        ],
        controllers: [
            _scores_controller__rspack_import_3.ScoresController
        ],
        exports: []
    })
], ScoresModule);


},
13(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ScoresService: () => (ScoresService)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(1);
/* import */ var _nestjs_common__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__rspack_import_0);
/* import */ var _nestjs_mongoose__rspack_import_1 = __webpack_require__(9);
/* import */ var _nestjs_mongoose__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__rspack_import_1);
/* import */ var mongoose__rspack_import_2 = __webpack_require__(14);
/* import */ var mongoose__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(mongoose__rspack_import_2);
/* import */ var _score_entity__rspack_import_3 = __webpack_require__(11);
/* import */ var _dto_score_response_dto__rspack_import_4 = __webpack_require__(15);
/* import */ var _common_utils__rspack_import_5 = __webpack_require__(16);
/* import */ var _mongoose_connection__rspack_import_6 = __webpack_require__(18);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}







class ScoresService {
    async findAll(playerName) {
        try {
            let query = this.scoreModel.find();
            if (playerName) {
                query = query.where('playerName').regex(new RegExp(playerName, 'i'));
            }
            const scores = await query.sort('-score').exec();
            return scores.map(_dto_score_response_dto__rspack_import_4.ScoreResponseDTO.from);
        } catch (error) {
            const msg = 'Erro ao buscar as pontuações';
            this.logger.error(msg, error);
            throw new _nestjs_common__rspack_import_0.BadRequestException(msg);
        }
    }
    async count() {
        try {
            return await this.scoreModel.countDocuments().exec();
        } catch (error) {
            const msg = 'Erro ao contar as pontuações';
            this.logger.error(msg, error);
            throw new _nestjs_common__rspack_import_0.BadRequestException(msg);
        }
    }
    async add(requestDto) {
        if (!(0,_common_utils__rspack_import_5.testHash)(requestDto)) {
            const msg = 'O hash não é válido';
            this.logger.error(msg);
            throw new _nestjs_common__rspack_import_0.BadRequestException('O hash não é válido');
        }
        try {
            const newScore = new this.scoreModel();
            newScore.playerName = requestDto.playerName;
            newScore.score = requestDto.score;
            newScore.startTime = new Date(requestDto.startTime);
            newScore.endTime = new Date(requestDto.endTime);
            newScore.difficulty = requestDto.difficulty;
            const score = await newScore.save();
            return _dto_score_response_dto__rspack_import_4.ScoreResponseDTO.from(score);
        } catch (error) {
            const msg = 'Erro ao gravar a pontuação';
            this.logger.error(msg, error);
            throw new _nestjs_common__rspack_import_0.BadRequestException(msg);
        }
    }
    constructor(scoreModel){
        _define_property(this, "scoreModel", void 0);
        _define_property(this, "logger", void 0);
        this.scoreModel = scoreModel;
        this.logger = new _nestjs_common__rspack_import_0.Logger(ScoresService.name);
    }
}
ScoresService = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Injectable)(),
    _ts_param(0, (0,_nestjs_mongoose__rspack_import_1.InjectModel)(_score_entity__rspack_import_3.Score.name, _mongoose_connection__rspack_import_6.connectionName)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof mongoose__rspack_import_2.Model === "undefined" ? Object : mongoose__rspack_import_2.Model
    ])
], ScoresService);


},
18(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  connectionName: () => (connectionName)
});
const connectionName = 'asteroid-score';


},
28(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ValidationMessages: () => (ValidationMessages)
});
const ValidationMessages = Object.freeze({
    IS_NOT_EMPTY: 'Campo $property não pode ser vazio.',
    IS_NOT_DATE: 'Campo $property não é uma data válida.'
});


},
37(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  forceNumber: () => (forceNumber),
  forceString: () => (forceString)
});
const forceNumber = (num)=>Number(num) || 0;
const forceString = (str)=>String(str) || '';


},
22(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  moduleList: () => (moduleList)
});
/* import */ var _nestjs_mongoose__rspack_import_0 = __webpack_require__(9);
/* import */ var _nestjs_mongoose__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__rspack_import_0);
/* import */ var _modules_authors_authors_module__rspack_import_1 = __webpack_require__(23);
/* import */ var _modules_posts_posts_module__rspack_import_2 = __webpack_require__(34);
/* import */ var _mongoose_connection__rspack_import_3 = __webpack_require__(32);
/* import */ var _common_utils__rspack_import_4 = __webpack_require__(37);





const moduleList = [
    _nestjs_mongoose__rspack_import_0.MongooseModule.forRoot((0,_common_utils__rspack_import_4.forceString)(process.env.MONGO_URI_BLOG ?? process.env.MONGO_URI), {
        connectionName: _mongoose_connection__rspack_import_3.connectionName
    }),
    _modules_authors_authors_module__rspack_import_1.AuthorsModule,
    _modules_posts_posts_module__rspack_import_2.PostsModule
];


},
25(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Author: () => (Author),
  AuthorSchema: () => (AuthorSchema)
});
/* import */ var _nestjs_mongoose__rspack_import_0 = __webpack_require__(9);
/* import */ var _nestjs_mongoose__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__rspack_import_0);
/* import */ var mongoose__rspack_import_1 = __webpack_require__(14);
/* import */ var mongoose__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(mongoose__rspack_import_1);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}


class Author {
    constructor(realname, nickname, birthDate, posts){
        _define_property(this, "realname", void 0);
        _define_property(this, "nickname", void 0);
        _define_property(this, "birthDate", void 0);
        _define_property(this, "posts", void 0);
        this.realname = realname;
        this.nickname = nickname;
        this.birthDate = birthDate;
        this.posts = posts;
    }
}
_ts_decorate([
    (0,_nestjs_mongoose__rspack_import_0.Prop)({
        required: true,
        type: String
    }),
    _ts_metadata("design:type", String)
], Author.prototype, "realname", void 0);
_ts_decorate([
    (0,_nestjs_mongoose__rspack_import_0.Prop)({
        required: true,
        type: String
    }),
    _ts_metadata("design:type", String)
], Author.prototype, "nickname", void 0);
_ts_decorate([
    (0,_nestjs_mongoose__rspack_import_0.Prop)({
        required: true,
        type: String
    }),
    _ts_metadata("design:type", String)
], Author.prototype, "birthDate", void 0);
_ts_decorate([
    (0,_nestjs_mongoose__rspack_import_0.Prop)({
        type: [
            {
                type: mongoose__rspack_import_1.Types.ObjectId,
                ref: 'Post'
            }
        ]
    }),
    _ts_metadata("design:type", typeof Array === "undefined" ? Object : Array)
], Author.prototype, "posts", void 0);
Author = _ts_decorate([
    (0,_nestjs_mongoose__rspack_import_0.Schema)({
        collection: 'authors'
    }),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        String,
        String,
        typeof Array === "undefined" ? Object : Array
    ])
], Author);
const AuthorSchema = _nestjs_mongoose__rspack_import_0.SchemaFactory.createForClass(Author);


},
26(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AuthorsController: () => (AuthorsController)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(1);
/* import */ var _nestjs_common__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__rspack_import_0);
/* import */ var _posts_dto_post_add_request_dto__rspack_import_1 = __webpack_require__(27);
/* import */ var _authors_service__rspack_import_2 = __webpack_require__(29);
/* import */ var _dto_author_add_request_dto__rspack_import_3 = __webpack_require__(33);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}




class AuthorsController {
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
    constructor(authorsService){
        _define_property(this, "authorsService", void 0);
        this.authorsService = authorsService;
    }
}
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.Get)('count'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", typeof Promise === "undefined" ? Object : Promise)
], AuthorsController.prototype, "count", null);
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.Get)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", typeof Promise === "undefined" ? Object : Promise)
], AuthorsController.prototype, "findAll", null);
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.Post)(),
    (0,_nestjs_common__rspack_import_0.HttpCode)(201),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _dto_author_add_request_dto__rspack_import_3.AuthorAddRequestDTO === "undefined" ? Object : _dto_author_add_request_dto__rspack_import_3.AuthorAddRequestDTO
    ]),
    _ts_metadata("design:returntype", typeof Promise === "undefined" ? Object : Promise)
], AuthorsController.prototype, "add", null);
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.Post)(':id/posts'),
    (0,_nestjs_common__rspack_import_0.HttpCode)(201),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Param)('id')),
    _ts_param(1, (0,_nestjs_common__rspack_import_0.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        typeof _posts_dto_post_add_request_dto__rspack_import_1.PostAddRequestDTO === "undefined" ? Object : _posts_dto_post_add_request_dto__rspack_import_1.PostAddRequestDTO
    ]),
    _ts_metadata("design:returntype", typeof Promise === "undefined" ? Object : Promise)
], AuthorsController.prototype, "addPost", null);
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.Delete)(':id'),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Param)('id')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", void 0)
], AuthorsController.prototype, "delete", null);
AuthorsController = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Controller)('authors'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _authors_service__rspack_import_2.AuthorsService === "undefined" ? Object : _authors_service__rspack_import_2.AuthorsService
    ])
], AuthorsController);


},
23(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AuthorsModule: () => (AuthorsModule)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(1);
/* import */ var _nestjs_common__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__rspack_import_0);
/* import */ var _nestjs_mongoose__rspack_import_1 = __webpack_require__(9);
/* import */ var _nestjs_mongoose__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__rspack_import_1);
/* import */ var _posts_post_entity__rspack_import_2 = __webpack_require__(24);
/* import */ var _author_entity__rspack_import_3 = __webpack_require__(25);
/* import */ var _authors_controller__rspack_import_4 = __webpack_require__(26);
/* import */ var _authors_service__rspack_import_5 = __webpack_require__(29);
/* import */ var _mongoose_connection__rspack_import_6 = __webpack_require__(32);
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}







class AuthorsModule {
}
AuthorsModule = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Module)({
        imports: [
            _nestjs_mongoose__rspack_import_1.MongooseModule.forFeature([
                {
                    name: _author_entity__rspack_import_3.Author.name,
                    schema: _author_entity__rspack_import_3.AuthorSchema
                },
                {
                    name: _posts_post_entity__rspack_import_2.Post.name,
                    schema: _posts_post_entity__rspack_import_2.PostSchema
                }
            ], _mongoose_connection__rspack_import_6.connectionName)
        ],
        providers: [
            _authors_service__rspack_import_5.AuthorsService
        ],
        controllers: [
            _authors_controller__rspack_import_4.AuthorsController
        ],
        exports: []
    })
], AuthorsModule);


},
29(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AuthorsService: () => (AuthorsService)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(1);
/* import */ var _nestjs_common__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__rspack_import_0);
/* import */ var _nestjs_mongoose__rspack_import_1 = __webpack_require__(9);
/* import */ var _nestjs_mongoose__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__rspack_import_1);
/* import */ var class_validator__rspack_import_2 = __webpack_require__(20);
/* import */ var class_validator__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(class_validator__rspack_import_2);
/* import */ var mongoose__rspack_import_3 = __webpack_require__(14);
/* import */ var mongoose__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(mongoose__rspack_import_3);
/* import */ var _posts_dto_post_response_dto__rspack_import_4 = __webpack_require__(30);
/* import */ var _posts_post_entity__rspack_import_5 = __webpack_require__(24);
/* import */ var _author_entity__rspack_import_6 = __webpack_require__(25);
/* import */ var _dto_author_response_dto__rspack_import_7 = __webpack_require__(31);
/* import */ var _mongoose_connection__rspack_import_8 = __webpack_require__(32);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}









const { ObjectId } = mongoose__rspack_import_3.Types;
class AuthorsService {
    async count() {
        try {
            return await this.authorModel.countDocuments().exec();
        } catch (error) {
            const msg = 'Erro ao contar os autores';
            this.logger.error(msg, error);
            throw new _nestjs_common__rspack_import_0.BadRequestException(msg);
        }
    }
    async findAll() {
        try {
            const authors = await this.authorModel.find().exec();
            return authors.map(_dto_author_response_dto__rspack_import_7.AuthorResponseDTO.from);
        } catch (error) {
            const msg = 'Erro ao buscar os autores';
            this.logger.error(msg, error);
            throw new _nestjs_common__rspack_import_0.BadRequestException(msg);
        }
    }
    async findOne(id) {
        try {
            const _id = new ObjectId(id);
            const author = await this.authorModel.findById(_id).exec();
            if (author === null) {
                return null;
            }
            return _dto_author_response_dto__rspack_import_7.AuthorResponseDTO.from(author);
        } catch (error) {
            const msg = 'Erro ao buscar o autor';
            this.logger.error(msg, error);
            throw new _nestjs_common__rspack_import_0.BadRequestException(msg);
        }
    }
    async add(requestDto) {
        await (0,class_validator__rspack_import_2.validateOrReject)(requestDto);
        try {
            const newAuthor = new this.authorModel();
            newAuthor.realname = requestDto.name;
            newAuthor.nickname = requestDto.nickname;
            newAuthor.birthDate = requestDto.birthDate;
            const author = await newAuthor.save();
            return _dto_author_response_dto__rspack_import_7.AuthorResponseDTO.from(author);
        } catch (error) {
            const msg = 'Erro ao gravar o autor';
            this.logger.error(msg, error);
            throw new _nestjs_common__rspack_import_0.BadRequestException(msg);
        }
    }
    async addPost(id, requestDto) {
        await (0,class_validator__rspack_import_2.validateOrReject)(requestDto);
        try {
            const newPost = new this.postModel(requestDto);
            const _id = new ObjectId(id);
            const author = await this.authorModel.findById(_id).exec();
            if (author === null) {
                const msg = 'Erro ao gravar a postagem, author não encontrado';
                this.logger.error(msg);
                throw new _nestjs_common__rspack_import_0.BadRequestException(msg);
            }
            newPost.author = author;
            newPost.creationDate = new Date().toISOString().slice(0, 10);
            const post = await newPost.save();
            return _posts_dto_post_response_dto__rspack_import_4.PostResponseDTO.from(post);
        } catch (error) {
            const msg = 'Erro ao gravar a postagem';
            this.logger.error(msg, error);
            throw new _nestjs_common__rspack_import_0.BadRequestException(msg);
        }
    }
    async delete(id) {
        try {
            const _id = new ObjectId(id);
            await this.postModel.deleteMany({
                author: {
                    $eq: _id
                }
            }).exec();
            return await this.authorModel.findByIdAndDelete(_id).exec();
        } catch (error) {
            const msg = 'Erro ao apagar o autor';
            this.logger.error(msg, error);
            throw new _nestjs_common__rspack_import_0.BadRequestException(msg);
        }
    }
    constructor(authorModel, postModel){
        _define_property(this, "authorModel", void 0);
        _define_property(this, "postModel", void 0);
        _define_property(this, "logger", void 0);
        this.authorModel = authorModel;
        this.postModel = postModel;
        this.logger = new _nestjs_common__rspack_import_0.Logger(AuthorsService.name);
    }
}
AuthorsService = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Injectable)(),
    _ts_param(0, (0,_nestjs_mongoose__rspack_import_1.InjectModel)(_author_entity__rspack_import_6.Author.name, _mongoose_connection__rspack_import_8.connectionName)),
    _ts_param(1, (0,_nestjs_mongoose__rspack_import_1.InjectModel)(_posts_post_entity__rspack_import_5.Post.name, _mongoose_connection__rspack_import_8.connectionName)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof mongoose__rspack_import_3.Model === "undefined" ? Object : mongoose__rspack_import_3.Model,
        typeof mongoose__rspack_import_3.Model === "undefined" ? Object : mongoose__rspack_import_3.Model
    ])
], AuthorsService);


},
33(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AuthorAddRequestDTO: () => (AuthorAddRequestDTO)
});
/* import */ var class_validator__rspack_import_0 = __webpack_require__(20);
/* import */ var class_validator__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(class_validator__rspack_import_0);
/* import */ var _common_messages_validation_messages_constants__rspack_import_1 = __webpack_require__(28);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}


class AuthorAddRequestDTO {
    constructor(){
        _define_property(this, "name", void 0);
        _define_property(this, "nickname", void 0);
        _define_property(this, "birthDate", void 0);
    }
}
_ts_decorate([
    (0,class_validator__rspack_import_0.IsString)(),
    (0,class_validator__rspack_import_0.IsNotEmpty)({
        message: _common_messages_validation_messages_constants__rspack_import_1.ValidationMessages.IS_NOT_EMPTY
    }),
    _ts_metadata("design:type", String)
], AuthorAddRequestDTO.prototype, "name", void 0);
_ts_decorate([
    (0,class_validator__rspack_import_0.IsString)(),
    (0,class_validator__rspack_import_0.IsNotEmpty)({
        message: _common_messages_validation_messages_constants__rspack_import_1.ValidationMessages.IS_NOT_EMPTY
    }),
    _ts_metadata("design:type", String)
], AuthorAddRequestDTO.prototype, "nickname", void 0);
_ts_decorate([
    (0,class_validator__rspack_import_0.IsString)(),
    (0,class_validator__rspack_import_0.IsNotEmpty)({
        message: _common_messages_validation_messages_constants__rspack_import_1.ValidationMessages.IS_NOT_EMPTY
    }),
    (0,class_validator__rspack_import_0.IsDateString)(undefined, {
        message: _common_messages_validation_messages_constants__rspack_import_1.ValidationMessages.IS_NOT_EMPTY
    }),
    _ts_metadata("design:type", String)
], AuthorAddRequestDTO.prototype, "birthDate", void 0);


},
31(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AuthorResponseDTO: () => (AuthorResponseDTO)
});
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
class AuthorResponseDTO {
    constructor(id, name, nickname, birthDate, posts){
        _define_property(this, "id", void 0);
        _define_property(this, "name", void 0);
        _define_property(this, "nickname", void 0);
        _define_property(this, "birthDate", void 0);
        _define_property(this, "posts", void 0);
        this.id = id;
        this.name = name;
        this.nickname = nickname;
        this.birthDate = birthDate;
        this.posts = posts;
    }
}
_define_property(AuthorResponseDTO, "from", ({ _id, realname, nickname, birthDate, posts })=>new AuthorResponseDTO(_id.toHexString(), realname, nickname, birthDate, posts));


},
27(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PostAddRequestDTO: () => (PostAddRequestDTO)
});
/* import */ var class_validator__rspack_import_0 = __webpack_require__(20);
/* import */ var class_validator__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(class_validator__rspack_import_0);
/* import */ var _common_messages_validation_messages_constants__rspack_import_1 = __webpack_require__(28);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}


class PostAddRequestDTO {
    constructor(){
        _define_property(this, "title", void 0);
        _define_property(this, "body", void 0);
    }
}
_ts_decorate([
    (0,class_validator__rspack_import_0.IsString)(),
    (0,class_validator__rspack_import_0.IsNotEmpty)({
        message: _common_messages_validation_messages_constants__rspack_import_1.ValidationMessages.IS_NOT_EMPTY
    }),
    _ts_metadata("design:type", String)
], PostAddRequestDTO.prototype, "title", void 0);
_ts_decorate([
    (0,class_validator__rspack_import_0.IsString)(),
    (0,class_validator__rspack_import_0.IsNotEmpty)({
        message: _common_messages_validation_messages_constants__rspack_import_1.ValidationMessages.IS_NOT_EMPTY
    }),
    _ts_metadata("design:type", String)
], PostAddRequestDTO.prototype, "body", void 0);


},
30(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PostResponseDTO: () => (PostResponseDTO)
});
/* import */ var _authors_dto_author_response_dto__rspack_import_0 = __webpack_require__(31);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}

class PostResponseDTO {
    constructor(id, title, body, creationDate, author){
        _define_property(this, "id", void 0);
        _define_property(this, "title", void 0);
        _define_property(this, "body", void 0);
        _define_property(this, "creationDate", void 0);
        _define_property(this, "author", void 0);
        this.id = id;
        this.title = title;
        this.body = body;
        this.creationDate = creationDate;
        this.author = author;
    }
}
_define_property(PostResponseDTO, "from", ({ _id, title, body, creationDate, author })=>new PostResponseDTO(_id.toHexString(), title, body, creationDate, _authors_dto_author_response_dto__rspack_import_0.AuthorResponseDTO.from(author)));


},
24(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Post: () => (Post),
  PostSchema: () => (PostSchema)
});
/* import */ var _nestjs_mongoose__rspack_import_0 = __webpack_require__(9);
/* import */ var _nestjs_mongoose__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__rspack_import_0);
/* import */ var mongoose__rspack_import_1 = __webpack_require__(14);
/* import */ var mongoose__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(mongoose__rspack_import_1);
/* import */ var _authors_author_entity__rspack_import_2 = __webpack_require__(25);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}



class Post {
    constructor(title, body, creationDate, author){
        _define_property(this, "title", void 0);
        _define_property(this, "body", void 0);
        _define_property(this, "creationDate", void 0);
        _define_property(this, "author", void 0);
        this.title = title;
        this.body = body;
        this.creationDate = creationDate;
        this.author = author;
    }
}
_ts_decorate([
    (0,_nestjs_mongoose__rspack_import_0.Prop)({
        required: true,
        type: String
    }),
    _ts_metadata("design:type", String)
], Post.prototype, "title", void 0);
_ts_decorate([
    (0,_nestjs_mongoose__rspack_import_0.Prop)({
        required: true,
        type: String
    }),
    _ts_metadata("design:type", String)
], Post.prototype, "body", void 0);
_ts_decorate([
    (0,_nestjs_mongoose__rspack_import_0.Prop)({
        required: true,
        type: String
    }),
    _ts_metadata("design:type", String)
], Post.prototype, "creationDate", void 0);
_ts_decorate([
    (0,_nestjs_mongoose__rspack_import_0.Prop)({
        required: true,
        type: mongoose__rspack_import_1.Types.ObjectId,
        ref: 'Author'
    }),
    _ts_metadata("design:type", typeof _authors_author_entity__rspack_import_2.AuthorDocument === "undefined" ? Object : _authors_author_entity__rspack_import_2.AuthorDocument)
], Post.prototype, "author", void 0);
Post = _ts_decorate([
    (0,_nestjs_mongoose__rspack_import_0.Schema)({
        collection: 'posts'
    }),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        String,
        String,
        typeof _authors_author_entity__rspack_import_2.AuthorDocument === "undefined" ? Object : _authors_author_entity__rspack_import_2.AuthorDocument
    ])
], Post);
const PostSchema = _nestjs_mongoose__rspack_import_0.SchemaFactory.createForClass(Post);


},
35(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PostsController: () => (PostsController)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(1);
/* import */ var _nestjs_common__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__rspack_import_0);
/* import */ var _posts_service__rspack_import_1 = __webpack_require__(36);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}


class PostsController {
    findAll(authorName) {
        return this.postsService.findAll(authorName);
    }
    delete(id) {
        return this.postsService.delete(id);
    }
    constructor(postsService){
        _define_property(this, "postsService", void 0);
        this.postsService = postsService;
    }
}
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.Get)(),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Query)('authorName')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", typeof Promise === "undefined" ? Object : Promise)
], PostsController.prototype, "findAll", null);
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.Delete)(':id'),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Param)('id')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", void 0)
], PostsController.prototype, "delete", null);
PostsController = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Controller)('posts'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _posts_service__rspack_import_1.PostsService === "undefined" ? Object : _posts_service__rspack_import_1.PostsService
    ])
], PostsController);


},
34(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PostsModule: () => (PostsModule)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(1);
/* import */ var _nestjs_common__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__rspack_import_0);
/* import */ var _nestjs_mongoose__rspack_import_1 = __webpack_require__(9);
/* import */ var _nestjs_mongoose__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__rspack_import_1);
/* import */ var _authors_author_entity__rspack_import_2 = __webpack_require__(25);
/* import */ var _post_entity__rspack_import_3 = __webpack_require__(24);
/* import */ var _posts_controller__rspack_import_4 = __webpack_require__(35);
/* import */ var _posts_service__rspack_import_5 = __webpack_require__(36);
/* import */ var _mongoose_connection__rspack_import_6 = __webpack_require__(32);
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}







class PostsModule {
}
PostsModule = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Module)({
        imports: [
            _nestjs_mongoose__rspack_import_1.MongooseModule.forFeature([
                {
                    name: _authors_author_entity__rspack_import_2.Author.name,
                    schema: _authors_author_entity__rspack_import_2.AuthorSchema
                },
                {
                    name: _post_entity__rspack_import_3.Post.name,
                    schema: _post_entity__rspack_import_3.PostSchema
                }
            ], _mongoose_connection__rspack_import_6.connectionName)
        ],
        providers: [
            _posts_service__rspack_import_5.PostsService
        ],
        controllers: [
            _posts_controller__rspack_import_4.PostsController
        ],
        exports: []
    })
], PostsModule);


},
36(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PostsService: () => (PostsService)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(1);
/* import */ var _nestjs_common__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__rspack_import_0);
/* import */ var _nestjs_mongoose__rspack_import_1 = __webpack_require__(9);
/* import */ var _nestjs_mongoose__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__rspack_import_1);
/* import */ var mongoose__rspack_import_2 = __webpack_require__(14);
/* import */ var mongoose__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(mongoose__rspack_import_2);
/* import */ var _post_entity__rspack_import_3 = __webpack_require__(24);
/* import */ var _dto_post_response_dto__rspack_import_4 = __webpack_require__(30);
/* import */ var _authors_author_entity__rspack_import_5 = __webpack_require__(25);
/* import */ var _mongoose_connection__rspack_import_6 = __webpack_require__(32);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}







class PostsService {
    async findAll(authorName) {
        try {
            let query = this.postModel.find();
            if (authorName) {
                const authors = await this.authorModel.find().where('realname').regex(new RegExp(authorName, 'i')).select('id').exec();
                query = query.where('author').in(authors.map((author)=>author._id));
            }
            const posts = await query.populate('author').sort('-creationDate').exec();
            return posts.map(_dto_post_response_dto__rspack_import_4.PostResponseDTO.from);
        } catch (error) {
            const msg = 'Erro ao buscar as postagens';
            this.logger.error(msg, error);
            throw new _nestjs_common__rspack_import_0.BadRequestException(msg);
        }
    }
    async delete(id) {
        try {
            const _id = new mongoose__rspack_import_2.Types.ObjectId(id);
            return await this.postModel.findByIdAndDelete(_id).exec();
        } catch (error) {
            const msg = 'Erro ao apagar a postagem';
            this.logger.error(msg, error);
            throw new _nestjs_common__rspack_import_0.BadRequestException(msg);
        }
    }
    constructor(authorModel, postModel){
        _define_property(this, "authorModel", void 0);
        _define_property(this, "postModel", void 0);
        _define_property(this, "logger", void 0);
        this.authorModel = authorModel;
        this.postModel = postModel;
        this.logger = new _nestjs_common__rspack_import_0.Logger(PostsService.name);
    }
}
PostsService = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Injectable)(),
    _ts_param(0, (0,_nestjs_mongoose__rspack_import_1.InjectModel)(_authors_author_entity__rspack_import_5.Author.name, _mongoose_connection__rspack_import_6.connectionName)),
    _ts_param(1, (0,_nestjs_mongoose__rspack_import_1.InjectModel)(_post_entity__rspack_import_3.Post.name, _mongoose_connection__rspack_import_6.connectionName)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof mongoose__rspack_import_2.Model === "undefined" ? Object : mongoose__rspack_import_2.Model,
        typeof mongoose__rspack_import_2.Model === "undefined" ? Object : mongoose__rspack_import_2.Model
    ])
], PostsService);


},
32(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  connectionName: () => (connectionName)
});
const connectionName = 'blog-posts';


},
98(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ApiToCheck: () => (ApiToCheck)
});
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
class ApiToCheck {
    constructor(name, uri){
        _define_property(this, "name", void 0);
        _define_property(this, "uri", void 0);
        this.name = name;
        this.uri = uri;
    }
}


},
95(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CheckServicesModule: () => (CheckServicesModule)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(1);
/* import */ var _nestjs_common__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__rspack_import_0);
/* import */ var _check_services_service__rspack_import_1 = __webpack_require__(96);
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}


class CheckServicesModule {
}
CheckServicesModule = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Module)({
        providers: [
            _check_services_service__rspack_import_1.CheckServicesService
        ],
        exports: []
    })
], CheckServicesModule);


},
96(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CheckServicesService: () => (CheckServicesService)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(1);
/* import */ var _nestjs_common__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__rspack_import_0);
/* import */ var _nestjs_schedule__rspack_import_1 = __webpack_require__(94);
/* import */ var _nestjs_schedule__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_nestjs_schedule__rspack_import_1);
/* import */ var axios__rspack_import_2 = __webpack_require__(97);
/* import */ var axios__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(axios__rspack_import_2);
/* import */ var class_transformer__rspack_import_3 = __webpack_require__(69);
/* import */ var class_transformer__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(class_transformer__rspack_import_3);
/* import */ var _api_to_check__rspack_import_4 = __webpack_require__(98);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}





class CheckServicesService {
    async CheckServices() {
        const checkAllAPIs = process.env.CHECK_ALL_APIS?.toLowerCase() === 'true';
        let apisToCheck = [];
        try {
            apisToCheck = (0,class_transformer__rspack_import_3.plainToInstance)(_api_to_check__rspack_import_4.ApiToCheck, JSON.parse(process.env.APIS_TO_CHECK || '[]'));
        } catch (error) {
            this.logger.error('Error casting Env var APIS_TO_CHECK', error);
            return false;
        }
        return checkAllAPIs ? this.checkAllAPIs(apisToCheck) : this.checkRandomAPI(apisToCheck);
    }
    async checkAllAPIs(apisToCheck) {
        for (const api of apisToCheck){
            try {
                await axios__rspack_import_2_default().get(api.uri);
            } catch (error) {
                this.logger.error(`Error checking API: ${api.name}`, error);
                return false;
            }
        }
        return true;
    }
    async checkRandomAPI(apisToCheck) {
        const api = apisToCheck[Math.floor(Math.random() * apisToCheck.length)];
        try {
            await axios__rspack_import_2_default().get(api.uri);
        } catch (error) {
            this.logger.error(`Error checking API: ${api.name}`, error);
            return false;
        }
        return true;
    }
    constructor(){
        _define_property(this, "logger", new _nestjs_common__rspack_import_0.Logger(CheckServicesService.name));
    }
}
_ts_decorate([
    (0,_nestjs_schedule__rspack_import_1.Cron)('0/6 0-2,8-23 * * 1-5'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", Promise)
], CheckServicesService.prototype, "CheckServices", null);
CheckServicesService = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [])
], CheckServicesService);


},
50(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AuthModule: () => (AuthModule)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(1);
/* import */ var _nestjs_common__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__rspack_import_0);
/* import */ var _nestjs_jwt__rspack_import_1 = __webpack_require__(51);
/* import */ var _nestjs_jwt__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_nestjs_jwt__rspack_import_1);
/* import */ var _nestjs_passport__rspack_import_2 = __webpack_require__(52);
/* import */ var _nestjs_passport__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(_nestjs_passport__rspack_import_2);
/* import */ var _jwt_strategy__rspack_import_3 = __webpack_require__(53);
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}




class AuthModule {
}
AuthModule = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Global)(),
    (0,_nestjs_common__rspack_import_0.Module)({
        imports: [
            _nestjs_passport__rspack_import_2.PassportModule.register({
                defaultStrategy: "jwt"
            }),
            _nestjs_jwt__rspack_import_1.JwtModule.register({})
        ],
        providers: [
            _jwt_strategy__rspack_import_3.JwtStrategy
        ],
        exports: [
            _nestjs_passport__rspack_import_2.PassportModule,
            _nestjs_jwt__rspack_import_1.JwtModule
        ]
    })
], AuthModule);


},
55(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getjwtExpiresIn: () => (getjwtExpiresIn),
  getjwtExpiresInRefresh: () => (getjwtExpiresInRefresh),
  getjwtSecret: () => (getjwtSecret),
  getjwtSecretRefresh: () => (getjwtSecretRefresh)
});
/* import */ var _utils__rspack_import_0 = __webpack_require__(56);

const getjwtSecret = ()=>(0,_utils__rspack_import_0.forceString)(process.env.JWT_SECRET_RESTAURANTS ?? process.env.JWT_SECRET);
const getjwtExpiresIn = ()=>process.env.JWT_EXPIRES_IN_RESTAURANTS ?? process.env.JWT_EXPIRES_IN ?? "1d";
const getjwtSecretRefresh = ()=>process.env.JWT_SECRET_REFRESH_RESTAURANTS ?? process.env.JWT_REFRESH_SECRET ?? getjwtSecret();
const getjwtExpiresInRefresh = ()=>{
    const envInfo = process.env.JWT_EXPIRES_IN_REFRESH_RESTAURANTS ?? process.env.JWT_EXPIRES_IN_REFRESH;
    return envInfo !== undefined ? envInfo : getjwtExpiresIn();
};


},
53(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  JwtStrategy: () => (JwtStrategy)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(1);
/* import */ var _nestjs_common__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__rspack_import_0);
/* import */ var _nestjs_passport__rspack_import_1 = __webpack_require__(52);
/* import */ var _nestjs_passport__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_nestjs_passport__rspack_import_1);
/* import */ var passport_jwt__rspack_import_2 = __webpack_require__(54);
/* import */ var passport_jwt__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(passport_jwt__rspack_import_2);
/* import */ var _jwt_env__rspack_import_3 = __webpack_require__(55);
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}




class JwtStrategy extends (0,_nestjs_passport__rspack_import_1.PassportStrategy)(passport_jwt__rspack_import_2.Strategy) {
    validate(payload) {
        return {
            userId: payload.sub,
            username: payload.username,
            role: payload.role
        };
    }
    constructor(){
        super({
            jwtFromRequest: passport_jwt__rspack_import_2.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: (0,_jwt_env__rspack_import_3.getjwtSecret)()
        });
    }
}
JwtStrategy = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [])
], JwtStrategy);


},
88(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CurrentUser: () => (CurrentUser)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(1);
/* import */ var _nestjs_common__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__rspack_import_0);

const CurrentUser = (0,_nestjs_common__rspack_import_0.createParamDecorator)((_data, ctx)=>{
    const request = ctx.switchToHttp().getRequest();
    return request.user;
});


},
68(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PaginationQueryDto: () => (PaginationQueryDto)
});
/* import */ var class_transformer__rspack_import_0 = __webpack_require__(69);
/* import */ var class_transformer__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(class_transformer__rspack_import_0);
/* import */ var class_validator__rspack_import_1 = __webpack_require__(20);
/* import */ var class_validator__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(class_validator__rspack_import_1);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}


class PaginationQueryDto {
    constructor(){
        _define_property(this, "page", 1);
        _define_property(this, "limit", 10);
        _define_property(this, "name", void 0);
    }
}
_ts_decorate([
    (0,class_validator__rspack_import_1.IsOptional)(),
    (0,class_transformer__rspack_import_0.Type)(()=>Number),
    (0,class_validator__rspack_import_1.IsInt)(),
    (0,class_validator__rspack_import_1.Min)(1),
    _ts_metadata("design:type", Number)
], PaginationQueryDto.prototype, "page", void 0);
_ts_decorate([
    (0,class_validator__rspack_import_1.IsOptional)(),
    (0,class_transformer__rspack_import_0.Type)(()=>Number),
    (0,class_validator__rspack_import_1.IsInt)(),
    (0,class_validator__rspack_import_1.Min)(1),
    _ts_metadata("design:type", Number)
], PaginationQueryDto.prototype, "limit", void 0);
_ts_decorate([
    (0,class_validator__rspack_import_1.IsOptional)(),
    (0,class_validator__rspack_import_1.IsString)(),
    _ts_metadata("design:type", String)
], PaginationQueryDto.prototype, "name", void 0);


},
74(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Role: () => (Role)
});
var Role = /*#__PURE__*/ function(Role) {
    Role["ADMIN"] = "admin";
    Role["USER"] = "user";
    Role["VISITOR"] = "visitor";
    return Role;
}({});


},
70(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  JwtAuthGuard: () => (JwtAuthGuard)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(1);
/* import */ var _nestjs_common__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__rspack_import_0);
/* import */ var _nestjs_passport__rspack_import_1 = __webpack_require__(52);
/* import */ var _nestjs_passport__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_nestjs_passport__rspack_import_1);
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}


class JwtAuthGuard extends (0,_nestjs_passport__rspack_import_1.AuthGuard)("jwt") {
}
JwtAuthGuard = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Injectable)()
], JwtAuthGuard);


},
71(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PermissionsGuard: () => (PermissionsGuard)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(1);
/* import */ var _nestjs_common__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__rspack_import_0);
/* import */ var _nestjs_core__rspack_import_1 = __webpack_require__(2);
/* import */ var _nestjs_core__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_nestjs_core__rspack_import_1);
/* import */ var _permissions_require_permission_decorator__rspack_import_2 = __webpack_require__(72);
/* import */ var _permissions_permissions_matrix__rspack_import_3 = __webpack_require__(73);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}




class PermissionsGuard {
    canActivate(context) {
        const required = this.reflector.getAllAndOverride(_permissions_require_permission_decorator__rspack_import_2.PERMISSION_KEY, [
            context.getHandler(),
            context.getClass()
        ]);
        if (!required) return true;
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        if (!user) {
            throw new _nestjs_common__rspack_import_0.ForbiddenException("Usuário não autenticado");
        }
        const allowed = (0,_permissions_permissions_matrix__rspack_import_3.hasPermission)(user.role, required.module, required.action);
        if (!allowed) {
            throw new _nestjs_common__rspack_import_0.ForbiddenException(`A role "${user.role}" não possui permissão de "${required.action}" em "${required.module}"`);
        }
        return true;
    }
    constructor(reflector){
        _define_property(this, "reflector", void 0);
        this.reflector = reflector;
    }
}
PermissionsGuard = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _nestjs_core__rspack_import_1.Reflector === "undefined" ? Object : _nestjs_core__rspack_import_1.Reflector
    ])
], PermissionsGuard);


},
63(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  paginate: () => (paginate),
  paginateWithQuery: () => (paginateWithQuery)
});
async function paginateWithQuery(model, query, extraFilter = {}) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 10;
    const filter = {
        ...extraFilter
    };
    if (query.name) {
        filter.name = {
            $regex: query.name,
            $options: "i"
        };
    }
    return paginate(model, filter, page, limit);
}
async function paginate(model, filter = {}, page = 1, limit = 10) {
    const [data, total] = await Promise.all([
        model.find(filter).skip((page - 1) * limit).limit(limit).sort({
            createdAt: -1
        }).exec(),
        model.countDocuments(filter)
    ]);
    return {
        data,
        total,
        page,
        limit,
        totalPages: Math.max(Math.ceil(total / limit), 1)
    };
}


},
75(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  acceptVisitors: () => (acceptVisitors),
  visitorUsername: () => (visitorUsername)
});
const acceptVisitors = ()=>process.env.ENABLE_VISITORS === "true";
const visitorUsername = ()=>process.env.VISITORS_USERNAME ?? "visitor";


},
73(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ActionEnum: () => (ActionEnum),
  ModuleNameEnum: () => (ModuleNameEnum),
  PERMISSIONS: () => (PERMISSIONS),
  hasPermission: () => (hasPermission)
});
/* import */ var _enums_role_enum__rspack_import_0 = __webpack_require__(74);
/* import */ var _permissions_env__rspack_import_1 = __webpack_require__(75);


var ModuleNameEnum = /*#__PURE__*/ function(ModuleNameEnum) {
    ModuleNameEnum["DISHES"] = "dishes";
    ModuleNameEnum["RESTAURANTS"] = "restaurants";
    ModuleNameEnum["USERS"] = "users";
    return ModuleNameEnum;
}({});
var ActionEnum = /*#__PURE__*/ function(ActionEnum) {
    ActionEnum["CREATE"] = "create";
    ActionEnum["READ"] = "read";
    ActionEnum["UPDATE"] = "update";
    ActionEnum["DELETE"] = "delete";
    return ActionEnum;
}({});
const getFullAccess = ()=>({
        create: true,
        read: true,
        update: true,
        delete: true
    });
const getOnlyReadAccess = ()=>({
        create: false,
        read: true,
        update: false,
        delete: false
    });
const getNoAccess = ()=>({
        create: false,
        read: false,
        update: false,
        delete: false
    });
const PERMISSIONS = {
    [_enums_role_enum__rspack_import_0.Role.ADMIN]: {
        dishes: getFullAccess(),
        restaurants: getFullAccess(),
        users: getFullAccess()
    },
    [_enums_role_enum__rspack_import_0.Role.USER]: {
        dishes: getFullAccess(),
        restaurants: getOnlyReadAccess(),
        users: getOnlyReadAccess()
    },
    [_enums_role_enum__rspack_import_0.Role.VISITOR]: {
        dishes: getOnlyReadAccess(),
        restaurants: getOnlyReadAccess(),
        users: getNoAccess()
    }
};
function hasPermission(role, module, action) {
    if (role === _enums_role_enum__rspack_import_0.Role.VISITOR && !(0,_permissions_env__rspack_import_1.acceptVisitors)()) {
        return false;
    }
    return PERMISSIONS[role]?.[module]?.[action] ?? false;
}


},
72(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PERMISSION_KEY: () => (PERMISSION_KEY),
  RequirePermission: () => (RequirePermission)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(1);
/* import */ var _nestjs_common__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__rspack_import_0);

const PERMISSION_KEY = "required_permission";
const RequirePermission = (module, action)=>(0,_nestjs_common__rspack_import_0.SetMetadata)(PERMISSION_KEY, {
        module,
        action
    });


},
56(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  applyToJSONTransform: () => (applyToJSONTransform),
  forceNumber: () => (forceNumber),
  forceString: () => (forceString)
});
const forceNumber = (num)=>Number(num) || 0;
const forceString = (str)=>String(str) || "";
function applyToJSONTransform(schema, omitFields = []) {
    schema.set("toJSON", {
        virtuals: true,
        versionKey: false,
        transform: (_doc, ret)=>{
            ret.id = ret._id?.toString();
            delete ret._id;
            for (const field of omitFields){
                delete ret[field];
            }
            return ret;
        }
    });
}


},
49(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  moduleList: () => (moduleList)
});
/* import */ var _nestjs_mongoose__rspack_import_0 = __webpack_require__(9);
/* import */ var _nestjs_mongoose__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__rspack_import_0);
/* import */ var _common_auth_auth_module__rspack_import_1 = __webpack_require__(50);
/* import */ var _modules_dishes_dishes_module__rspack_import_2 = __webpack_require__(57);
/* import */ var _modules_restaurants_restaurants_module__rspack_import_3 = __webpack_require__(76);
/* import */ var _modules_users_users_module__rspack_import_4 = __webpack_require__(82);
/* import */ var _mongoose_connection__rspack_import_5 = __webpack_require__(64);
/* import */ var _common_utils__rspack_import_6 = __webpack_require__(56);







const moduleList = [
    _nestjs_mongoose__rspack_import_0.MongooseModule.forRoot((0,_common_utils__rspack_import_6.forceString)(process.env.MONGO_URI_RESTAURANTS ?? process.env.MONGO_URI), {
        connectionName: _mongoose_connection__rspack_import_5.connectionName
    }),
    _common_auth_auth_module__rspack_import_1.AuthModule,
    _modules_dishes_dishes_module__rspack_import_2.DishesModule,
    _modules_restaurants_restaurants_module__rspack_import_3.RestaurantsModule,
    _modules_users_users_module__rspack_import_4.UsersModule
];


},
60(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DishesController: () => (DishesController)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(1);
/* import */ var _nestjs_common__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__rspack_import_0);
/* import */ var _dishes_service__rspack_import_1 = __webpack_require__(61);
/* import */ var _dto_create_dish_dto__rspack_import_2 = __webpack_require__(65);
/* import */ var _dto_update_dish_dto__rspack_import_3 = __webpack_require__(66);
/* import */ var _common_dto_pagination_query_dto__rspack_import_4 = __webpack_require__(68);
/* import */ var _common_guards_jwt_auth_guard__rspack_import_5 = __webpack_require__(70);
/* import */ var _common_guards_permissions_guard__rspack_import_6 = __webpack_require__(71);
/* import */ var _common_permissions_require_permission_decorator__rspack_import_7 = __webpack_require__(72);
/* import */ var _common_permissions_permissions_matrix__rspack_import_8 = __webpack_require__(73);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}









class DishesController {
    create(dto) {
        return this.dishesService.create(dto);
    }
    findAll(query) {
        return this.dishesService.findAll(query);
    }
    findOne(id) {
        return this.dishesService.findById(id);
    }
    update(id, dto) {
        return this.dishesService.update(id, dto);
    }
    remove(id) {
        return this.dishesService.remove(id);
    }
    constructor(dishesService){
        _define_property(this, "dishesService", void 0);
        this.dishesService = dishesService;
    }
}
_ts_decorate([
    (0,_common_permissions_require_permission_decorator__rspack_import_7.RequirePermission)(_common_permissions_permissions_matrix__rspack_import_8.ModuleNameEnum.DISHES, _common_permissions_permissions_matrix__rspack_import_8.ActionEnum.CREATE),
    (0,_nestjs_common__rspack_import_0.Post)(),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _dto_create_dish_dto__rspack_import_2.CreateDishDto === "undefined" ? Object : _dto_create_dish_dto__rspack_import_2.CreateDishDto
    ]),
    _ts_metadata("design:returntype", void 0)
], DishesController.prototype, "create", null);
_ts_decorate([
    (0,_common_permissions_require_permission_decorator__rspack_import_7.RequirePermission)(_common_permissions_permissions_matrix__rspack_import_8.ModuleNameEnum.DISHES, _common_permissions_permissions_matrix__rspack_import_8.ActionEnum.READ),
    (0,_nestjs_common__rspack_import_0.Get)(),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Query)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _common_dto_pagination_query_dto__rspack_import_4.PaginationQueryDto === "undefined" ? Object : _common_dto_pagination_query_dto__rspack_import_4.PaginationQueryDto
    ]),
    _ts_metadata("design:returntype", void 0)
], DishesController.prototype, "findAll", null);
_ts_decorate([
    (0,_common_permissions_require_permission_decorator__rspack_import_7.RequirePermission)(_common_permissions_permissions_matrix__rspack_import_8.ModuleNameEnum.DISHES, _common_permissions_permissions_matrix__rspack_import_8.ActionEnum.READ),
    (0,_nestjs_common__rspack_import_0.Get)(":id"),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Param)("id")),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", void 0)
], DishesController.prototype, "findOne", null);
_ts_decorate([
    (0,_common_permissions_require_permission_decorator__rspack_import_7.RequirePermission)(_common_permissions_permissions_matrix__rspack_import_8.ModuleNameEnum.DISHES, _common_permissions_permissions_matrix__rspack_import_8.ActionEnum.UPDATE),
    (0,_nestjs_common__rspack_import_0.Patch)(":id"),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Param)("id")),
    _ts_param(1, (0,_nestjs_common__rspack_import_0.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        typeof _dto_update_dish_dto__rspack_import_3.UpdateDishDto === "undefined" ? Object : _dto_update_dish_dto__rspack_import_3.UpdateDishDto
    ]),
    _ts_metadata("design:returntype", void 0)
], DishesController.prototype, "update", null);
_ts_decorate([
    (0,_common_permissions_require_permission_decorator__rspack_import_7.RequirePermission)(_common_permissions_permissions_matrix__rspack_import_8.ModuleNameEnum.DISHES, _common_permissions_permissions_matrix__rspack_import_8.ActionEnum.DELETE),
    (0,_nestjs_common__rspack_import_0.Delete)(":id"),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Param)("id")),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", void 0)
], DishesController.prototype, "remove", null);
DishesController = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Controller)("dishes"),
    (0,_nestjs_common__rspack_import_0.UseGuards)(_common_guards_jwt_auth_guard__rspack_import_5.JwtAuthGuard, _common_guards_permissions_guard__rspack_import_6.PermissionsGuard),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _dishes_service__rspack_import_1.DishesService === "undefined" ? Object : _dishes_service__rspack_import_1.DishesService
    ])
], DishesController);


},
57(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DishesModule: () => (DishesModule)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(1);
/* import */ var _nestjs_common__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__rspack_import_0);
/* import */ var _nestjs_mongoose__rspack_import_1 = __webpack_require__(9);
/* import */ var _nestjs_mongoose__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__rspack_import_1);
/* import */ var _schemas_dish_schema__rspack_import_2 = __webpack_require__(58);
/* import */ var _restaurants_schemas_restaurant_schema__rspack_import_3 = __webpack_require__(59);
/* import */ var _dishes_controller__rspack_import_4 = __webpack_require__(60);
/* import */ var _dishes_service__rspack_import_5 = __webpack_require__(61);
/* import */ var _mongoose_connection__rspack_import_6 = __webpack_require__(64);
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}







class DishesModule {
}
DishesModule = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Module)({
        imports: [
            _nestjs_mongoose__rspack_import_1.MongooseModule.forFeature([
                {
                    name: _schemas_dish_schema__rspack_import_2.Dish.name,
                    schema: _schemas_dish_schema__rspack_import_2.DishSchema
                },
                {
                    name: _restaurants_schemas_restaurant_schema__rspack_import_3.Restaurant.name,
                    schema: _restaurants_schemas_restaurant_schema__rspack_import_3.RestaurantSchema
                }
            ], _mongoose_connection__rspack_import_6.connectionName)
        ],
        controllers: [
            _dishes_controller__rspack_import_4.DishesController
        ],
        providers: [
            _dishes_service__rspack_import_5.DishesService
        ],
        exports: [
            _dishes_service__rspack_import_5.DishesService
        ]
    })
], DishesModule);


},
61(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DishesService: () => (DishesService)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(1);
/* import */ var _nestjs_common__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__rspack_import_0);
/* import */ var _nestjs_mongoose__rspack_import_1 = __webpack_require__(9);
/* import */ var _nestjs_mongoose__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__rspack_import_1);
/* import */ var mongoose__rspack_import_2 = __webpack_require__(14);
/* import */ var mongoose__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(mongoose__rspack_import_2);
/* import */ var _schemas_dish_schema__rspack_import_3 = __webpack_require__(58);
/* import */ var _helpers_paginate__rspack_import_4 = __webpack_require__(62);
/* import */ var _mongoose_connection__rspack_import_5 = __webpack_require__(64);
/* import */ var _restaurants_schemas_restaurant_schema__rspack_import_6 = __webpack_require__(59);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}







class DishesService {
    async ensureRestaurantExists(restaurantId) {
        const exists = await this.restaurantModel.exists({
            _id: restaurantId
        });
        if (!exists) {
            throw new _nestjs_common__rspack_import_0.NotFoundException("Restaurante informado não existe");
        }
    }
    async create(dto) {
        await this.ensureRestaurantExists(dto.restaurant_id);
        return new this.dishModel(dto).save();
    }
    findAll(query) {
        return (0,_helpers_paginate__rspack_import_4.paginateDishes)(this.dishModel, query);
    }
    async findById(id) {
        const dish = await this.dishModel.findById(id);
        if (!dish) {
            throw new _nestjs_common__rspack_import_0.NotFoundException("Prato não encontrado");
        }
        return dish;
    }
    async update(id, dto) {
        if (dto.restaurant_id) {
            await this.ensureRestaurantExists(dto.restaurant_id);
        }
        const dish = await this.findById(id);
        Object.assign(dish, dto);
        return dish.save();
    }
    async remove(id) {
        const dish = await this.findById(id);
        await dish.deleteOne();
        return {
            deleted: true
        };
    }
    constructor(dishModel, restaurantModel){
        _define_property(this, "dishModel", void 0);
        _define_property(this, "restaurantModel", void 0);
        this.dishModel = dishModel;
        this.restaurantModel = restaurantModel;
    }
}
DishesService = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Injectable)(),
    _ts_param(0, (0,_nestjs_mongoose__rspack_import_1.InjectModel)(_schemas_dish_schema__rspack_import_3.Dish.name, _mongoose_connection__rspack_import_5.connectionName)),
    _ts_param(1, (0,_nestjs_mongoose__rspack_import_1.InjectModel)(_restaurants_schemas_restaurant_schema__rspack_import_6.Restaurant.name, _mongoose_connection__rspack_import_5.connectionName)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof mongoose__rspack_import_2.Model === "undefined" ? Object : mongoose__rspack_import_2.Model,
        typeof mongoose__rspack_import_2.Model === "undefined" ? Object : mongoose__rspack_import_2.Model
    ])
], DishesService);


},
65(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CreateDishDto: () => (CreateDishDto)
});
/* import */ var class_validator__rspack_import_0 = __webpack_require__(20);
/* import */ var class_validator__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(class_validator__rspack_import_0);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}

class CreateDishDto {
    constructor(){
        _define_property(this, "name", void 0);
        _define_property(this, "price", void 0);
        _define_property(this, "restaurant_id", void 0);
    }
}
_ts_decorate([
    (0,class_validator__rspack_import_0.IsString)(),
    (0,class_validator__rspack_import_0.MinLength)(1),
    _ts_metadata("design:type", String)
], CreateDishDto.prototype, "name", void 0);
_ts_decorate([
    (0,class_validator__rspack_import_0.IsNumber)(),
    (0,class_validator__rspack_import_0.IsPositive)(),
    _ts_metadata("design:type", Number)
], CreateDishDto.prototype, "price", void 0);
_ts_decorate([
    (0,class_validator__rspack_import_0.IsMongoId)(),
    _ts_metadata("design:type", String)
], CreateDishDto.prototype, "restaurant_id", void 0);


},
66(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  UpdateDishDto: () => (UpdateDishDto)
});
/* import */ var _nestjs_mapped_types__rspack_import_0 = __webpack_require__(67);
/* import */ var _nestjs_mapped_types__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_nestjs_mapped_types__rspack_import_0);
/* import */ var _create_dish_dto__rspack_import_1 = __webpack_require__(65);


class UpdateDishDto extends (0,_nestjs_mapped_types__rspack_import_0.PartialType)(_create_dish_dto__rspack_import_1.CreateDishDto) {
}


},
62(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  paginateDishes: () => (paginateDishes)
});
/* import */ var _common_helpers_paginate__rspack_import_0 = __webpack_require__(63);

async function paginateDishes(model, query, extraFilter = {}) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 10;
    const filter = {
        ...extraFilter
    };
    if (query.name) {
        filter.name = {
            $regex: query.name,
            $options: "i"
        };
    }
    if (query.restaurant) {
        filter.restaurant_id = query.restaurant;
    }
    return (0,_common_helpers_paginate__rspack_import_0.paginate)(model, filter, page, limit);
}


},
58(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Dish: () => (Dish),
  DishSchema: () => (DishSchema)
});
/* import */ var _nestjs_mongoose__rspack_import_0 = __webpack_require__(9);
/* import */ var _nestjs_mongoose__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__rspack_import_0);
/* import */ var mongoose__rspack_import_1 = __webpack_require__(14);
/* import */ var mongoose__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(mongoose__rspack_import_1);
/* import */ var _common_utils__rspack_import_2 = __webpack_require__(56);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}



class Dish {
    constructor(){
        _define_property(this, "name", void 0);
        _define_property(this, "price", void 0);
        _define_property(this, "restaurant_id", void 0);
    }
}
_ts_decorate([
    (0,_nestjs_mongoose__rspack_import_0.Prop)({
        required: true,
        trim: true,
        index: true
    }),
    _ts_metadata("design:type", String)
], Dish.prototype, "name", void 0);
_ts_decorate([
    (0,_nestjs_mongoose__rspack_import_0.Prop)({
        required: true,
        min: 0
    }),
    _ts_metadata("design:type", Number)
], Dish.prototype, "price", void 0);
_ts_decorate([
    (0,_nestjs_mongoose__rspack_import_0.Prop)({
        type: mongoose__rspack_import_1.Types.ObjectId,
        ref: "Restaurant",
        required: true,
        index: true
    }),
    _ts_metadata("design:type", typeof mongoose__rspack_import_1.Types === "undefined" || typeof mongoose__rspack_import_1.Types.ObjectId === "undefined" ? Object : mongoose__rspack_import_1.Types.ObjectId)
], Dish.prototype, "restaurant_id", void 0);
Dish = _ts_decorate([
    (0,_nestjs_mongoose__rspack_import_0.Schema)({
        timestamps: true,
        collection: "dishes"
    })
], Dish);
const DishSchema = _nestjs_mongoose__rspack_import_0.SchemaFactory.createForClass(Dish);
(0,_common_utils__rspack_import_2.applyToJSONTransform)(DishSchema);


},
79(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CreateRestaurantDto: () => (CreateRestaurantDto)
});
/* import */ var class_validator__rspack_import_0 = __webpack_require__(20);
/* import */ var class_validator__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(class_validator__rspack_import_0);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}

class CreateRestaurantDto {
    constructor(){
        _define_property(this, "name", void 0);
        _define_property(this, "phone", void 0);
        _define_property(this, "address", void 0);
    }
}
_ts_decorate([
    (0,class_validator__rspack_import_0.IsString)(),
    (0,class_validator__rspack_import_0.MinLength)(1),
    _ts_metadata("design:type", String)
], CreateRestaurantDto.prototype, "name", void 0);
_ts_decorate([
    (0,class_validator__rspack_import_0.IsString)(),
    (0,class_validator__rspack_import_0.MinLength)(1),
    _ts_metadata("design:type", String)
], CreateRestaurantDto.prototype, "phone", void 0);
_ts_decorate([
    (0,class_validator__rspack_import_0.IsString)(),
    (0,class_validator__rspack_import_0.MinLength)(1),
    _ts_metadata("design:type", String)
], CreateRestaurantDto.prototype, "address", void 0);


},
80(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  UpdateRestaurantDto: () => (UpdateRestaurantDto)
});
/* import */ var _nestjs_mapped_types__rspack_import_0 = __webpack_require__(67);
/* import */ var _nestjs_mapped_types__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_nestjs_mapped_types__rspack_import_0);
/* import */ var _create_restaurant_dto__rspack_import_1 = __webpack_require__(79);


class UpdateRestaurantDto extends (0,_nestjs_mapped_types__rspack_import_0.PartialType)(_create_restaurant_dto__rspack_import_1.CreateRestaurantDto) {
}


},
81(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  RestaurantsOpenController: () => (RestaurantsOpenController)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(1);
/* import */ var _nestjs_common__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__rspack_import_0);
/* import */ var _restaurants_service__rspack_import_1 = __webpack_require__(78);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}


class RestaurantsOpenController {
    count() {
        return this.restaurantsService.count();
    }
    constructor(restaurantsService){
        _define_property(this, "restaurantsService", void 0);
        this.restaurantsService = restaurantsService;
    }
}
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.Get)("count"),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", typeof Promise === "undefined" ? Object : Promise)
], RestaurantsOpenController.prototype, "count", null);
RestaurantsOpenController = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Controller)("restaurants-open"),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _restaurants_service__rspack_import_1.RestaurantsService === "undefined" ? Object : _restaurants_service__rspack_import_1.RestaurantsService
    ])
], RestaurantsOpenController);


},
77(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  RestaurantsController: () => (RestaurantsController)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(1);
/* import */ var _nestjs_common__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__rspack_import_0);
/* import */ var _restaurants_service__rspack_import_1 = __webpack_require__(78);
/* import */ var _dto_create_restaurant_dto__rspack_import_2 = __webpack_require__(79);
/* import */ var _dto_update_restaurant_dto__rspack_import_3 = __webpack_require__(80);
/* import */ var _common_dto_pagination_query_dto__rspack_import_4 = __webpack_require__(68);
/* import */ var _common_guards_jwt_auth_guard__rspack_import_5 = __webpack_require__(70);
/* import */ var _common_guards_permissions_guard__rspack_import_6 = __webpack_require__(71);
/* import */ var _common_permissions_require_permission_decorator__rspack_import_7 = __webpack_require__(72);
/* import */ var _common_permissions_permissions_matrix__rspack_import_8 = __webpack_require__(73);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}









class RestaurantsController {
    create(dto) {
        return this.restaurantsService.create(dto);
    }
    findAll(query) {
        return this.restaurantsService.findAll(query);
    }
    findOne(id) {
        return this.restaurantsService.findById(id);
    }
    update(id, dto) {
        return this.restaurantsService.update(id, dto);
    }
    remove(id) {
        return this.restaurantsService.remove(id);
    }
    constructor(restaurantsService){
        _define_property(this, "restaurantsService", void 0);
        this.restaurantsService = restaurantsService;
    }
}
_ts_decorate([
    (0,_common_permissions_require_permission_decorator__rspack_import_7.RequirePermission)(_common_permissions_permissions_matrix__rspack_import_8.ModuleNameEnum.RESTAURANTS, _common_permissions_permissions_matrix__rspack_import_8.ActionEnum.CREATE),
    (0,_nestjs_common__rspack_import_0.Post)(),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _dto_create_restaurant_dto__rspack_import_2.CreateRestaurantDto === "undefined" ? Object : _dto_create_restaurant_dto__rspack_import_2.CreateRestaurantDto
    ]),
    _ts_metadata("design:returntype", void 0)
], RestaurantsController.prototype, "create", null);
_ts_decorate([
    (0,_common_permissions_require_permission_decorator__rspack_import_7.RequirePermission)(_common_permissions_permissions_matrix__rspack_import_8.ModuleNameEnum.RESTAURANTS, _common_permissions_permissions_matrix__rspack_import_8.ActionEnum.READ),
    (0,_nestjs_common__rspack_import_0.Get)(),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Query)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _common_dto_pagination_query_dto__rspack_import_4.PaginationQueryDto === "undefined" ? Object : _common_dto_pagination_query_dto__rspack_import_4.PaginationQueryDto
    ]),
    _ts_metadata("design:returntype", void 0)
], RestaurantsController.prototype, "findAll", null);
_ts_decorate([
    (0,_common_permissions_require_permission_decorator__rspack_import_7.RequirePermission)(_common_permissions_permissions_matrix__rspack_import_8.ModuleNameEnum.RESTAURANTS, _common_permissions_permissions_matrix__rspack_import_8.ActionEnum.READ),
    (0,_nestjs_common__rspack_import_0.Get)(":id"),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Param)("id")),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", void 0)
], RestaurantsController.prototype, "findOne", null);
_ts_decorate([
    (0,_common_permissions_require_permission_decorator__rspack_import_7.RequirePermission)(_common_permissions_permissions_matrix__rspack_import_8.ModuleNameEnum.RESTAURANTS, _common_permissions_permissions_matrix__rspack_import_8.ActionEnum.UPDATE),
    (0,_nestjs_common__rspack_import_0.Patch)(":id"),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Param)("id")),
    _ts_param(1, (0,_nestjs_common__rspack_import_0.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        typeof _dto_update_restaurant_dto__rspack_import_3.UpdateRestaurantDto === "undefined" ? Object : _dto_update_restaurant_dto__rspack_import_3.UpdateRestaurantDto
    ]),
    _ts_metadata("design:returntype", void 0)
], RestaurantsController.prototype, "update", null);
_ts_decorate([
    (0,_common_permissions_require_permission_decorator__rspack_import_7.RequirePermission)(_common_permissions_permissions_matrix__rspack_import_8.ModuleNameEnum.RESTAURANTS, _common_permissions_permissions_matrix__rspack_import_8.ActionEnum.DELETE),
    (0,_nestjs_common__rspack_import_0.Delete)(":id"),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Param)("id")),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", void 0)
], RestaurantsController.prototype, "remove", null);
RestaurantsController = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Controller)("restaurants"),
    (0,_nestjs_common__rspack_import_0.UseGuards)(_common_guards_jwt_auth_guard__rspack_import_5.JwtAuthGuard, _common_guards_permissions_guard__rspack_import_6.PermissionsGuard),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _restaurants_service__rspack_import_1.RestaurantsService === "undefined" ? Object : _restaurants_service__rspack_import_1.RestaurantsService
    ])
], RestaurantsController);


},
76(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  RestaurantsModule: () => (RestaurantsModule)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(1);
/* import */ var _nestjs_common__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__rspack_import_0);
/* import */ var _nestjs_mongoose__rspack_import_1 = __webpack_require__(9);
/* import */ var _nestjs_mongoose__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__rspack_import_1);
/* import */ var _schemas_restaurant_schema__rspack_import_2 = __webpack_require__(59);
/* import */ var _restaurants_controller__rspack_import_3 = __webpack_require__(77);
/* import */ var _restaurants_service__rspack_import_4 = __webpack_require__(78);
/* import */ var _mongoose_connection__rspack_import_5 = __webpack_require__(64);
/* import */ var _restaurants_open_controller__rspack_import_6 = __webpack_require__(81);
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}







class RestaurantsModule {
}
RestaurantsModule = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Module)({
        imports: [
            _nestjs_mongoose__rspack_import_1.MongooseModule.forFeature([
                {
                    name: _schemas_restaurant_schema__rspack_import_2.Restaurant.name,
                    schema: _schemas_restaurant_schema__rspack_import_2.RestaurantSchema
                }
            ], _mongoose_connection__rspack_import_5.connectionName)
        ],
        controllers: [
            _restaurants_controller__rspack_import_3.RestaurantsController,
            _restaurants_open_controller__rspack_import_6.RestaurantsOpenController
        ],
        providers: [
            _restaurants_service__rspack_import_4.RestaurantsService
        ],
        exports: [
            _restaurants_service__rspack_import_4.RestaurantsService
        ]
    })
], RestaurantsModule);


},
78(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  RestaurantsService: () => (RestaurantsService)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(1);
/* import */ var _nestjs_common__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__rspack_import_0);
/* import */ var _nestjs_mongoose__rspack_import_1 = __webpack_require__(9);
/* import */ var _nestjs_mongoose__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__rspack_import_1);
/* import */ var mongoose__rspack_import_2 = __webpack_require__(14);
/* import */ var mongoose__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(mongoose__rspack_import_2);
/* import */ var _schemas_restaurant_schema__rspack_import_3 = __webpack_require__(59);
/* import */ var _common_helpers_paginate__rspack_import_4 = __webpack_require__(63);
/* import */ var _mongoose_connection__rspack_import_5 = __webpack_require__(64);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}






class RestaurantsService {
    async count() {
        try {
            return await this.restaurantModel.countDocuments().exec();
        } catch (error) {
            const msg = "Erro ao contar os restaurantes";
            this.logger.error(msg, error);
            throw new _nestjs_common__rspack_import_0.BadRequestException(msg);
        }
    }
    create(dto) {
        return new this.restaurantModel(dto).save();
    }
    findAll(query) {
        return (0,_common_helpers_paginate__rspack_import_4.paginateWithQuery)(this.restaurantModel, query);
    }
    async findById(id) {
        const restaurant = await this.restaurantModel.findById(id);
        if (!restaurant) {
            throw new _nestjs_common__rspack_import_0.NotFoundException("Restaurante não encontrado");
        }
        return restaurant;
    }
    async update(id, dto) {
        const restaurant = await this.findById(id);
        Object.assign(restaurant, dto);
        return restaurant.save();
    }
    async remove(id) {
        const restaurant = await this.findById(id);
        await restaurant.deleteOne();
        return {
            deleted: true
        };
    }
    constructor(restaurantModel){
        _define_property(this, "restaurantModel", void 0);
        _define_property(this, "logger", void 0);
        this.restaurantModel = restaurantModel;
        this.logger = new _nestjs_common__rspack_import_0.Logger(RestaurantsService.name);
    }
}
RestaurantsService = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Injectable)(),
    _ts_param(0, (0,_nestjs_mongoose__rspack_import_1.InjectModel)(_schemas_restaurant_schema__rspack_import_3.Restaurant.name, _mongoose_connection__rspack_import_5.connectionName)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof mongoose__rspack_import_2.Model === "undefined" ? Object : mongoose__rspack_import_2.Model
    ])
], RestaurantsService);


},
59(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Restaurant: () => (Restaurant),
  RestaurantSchema: () => (RestaurantSchema)
});
/* import */ var _nestjs_mongoose__rspack_import_0 = __webpack_require__(9);
/* import */ var _nestjs_mongoose__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__rspack_import_0);
/* import */ var _common_utils__rspack_import_1 = __webpack_require__(56);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}


class Restaurant {
    constructor(){
        _define_property(this, "name", void 0);
        _define_property(this, "phone", void 0);
        _define_property(this, "address", void 0);
    }
}
_ts_decorate([
    (0,_nestjs_mongoose__rspack_import_0.Prop)({
        required: true,
        trim: true,
        index: true
    }),
    _ts_metadata("design:type", String)
], Restaurant.prototype, "name", void 0);
_ts_decorate([
    (0,_nestjs_mongoose__rspack_import_0.Prop)({
        required: true,
        trim: true
    }),
    _ts_metadata("design:type", String)
], Restaurant.prototype, "phone", void 0);
_ts_decorate([
    (0,_nestjs_mongoose__rspack_import_0.Prop)({
        required: true,
        trim: true
    }),
    _ts_metadata("design:type", String)
], Restaurant.prototype, "address", void 0);
Restaurant = _ts_decorate([
    (0,_nestjs_mongoose__rspack_import_0.Schema)({
        timestamps: true,
        collection: "restaurants"
    })
], Restaurant);
const RestaurantSchema = _nestjs_mongoose__rspack_import_0.SchemaFactory.createForClass(Restaurant);
(0,_common_utils__rspack_import_1.applyToJSONTransform)(RestaurantSchema);


},
85(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AuthController: () => (AuthController)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(1);
/* import */ var _nestjs_common__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__rspack_import_0);
/* import */ var _users_service__rspack_import_1 = __webpack_require__(86);
/* import */ var _dto_login_user_dto__rspack_import_2 = __webpack_require__(87);
/* import */ var _common_auth_jwt_strategy__rspack_import_3 = __webpack_require__(53);
/* import */ var _common_decorators_current_user_decorator__rspack_import_4 = __webpack_require__(88);
/* import */ var _dto_refresh_token_dto__rspack_import_5 = __webpack_require__(89);
/* import */ var _common_guards_jwt_auth_guard__rspack_import_6 = __webpack_require__(70);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}







class AuthController {
    login(dto) {
        return this.usersService.login(dto);
    }
    refreshToken(currentUser, dto) {
        return this.usersService.refreshToken(currentUser, dto);
    }
    constructor(usersService){
        _define_property(this, "usersService", void 0);
        this.usersService = usersService;
    }
}
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.Post)("login"),
    (0,_nestjs_common__rspack_import_0.HttpCode)(_nestjs_common__rspack_import_0.HttpStatus.OK),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _dto_login_user_dto__rspack_import_2.LoginUserDto === "undefined" ? Object : _dto_login_user_dto__rspack_import_2.LoginUserDto
    ]),
    _ts_metadata("design:returntype", void 0)
], AuthController.prototype, "login", null);
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.UseGuards)(_common_guards_jwt_auth_guard__rspack_import_6.JwtAuthGuard),
    (0,_nestjs_common__rspack_import_0.Post)("refresh-token"),
    (0,_nestjs_common__rspack_import_0.HttpCode)(_nestjs_common__rspack_import_0.HttpStatus.OK),
    _ts_param(0, (0,_common_decorators_current_user_decorator__rspack_import_4.CurrentUser)()),
    _ts_param(1, (0,_nestjs_common__rspack_import_0.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _common_auth_jwt_strategy__rspack_import_3.RequestUser === "undefined" ? Object : _common_auth_jwt_strategy__rspack_import_3.RequestUser,
        typeof _dto_refresh_token_dto__rspack_import_5.RefreshTokenDto === "undefined" ? Object : _dto_refresh_token_dto__rspack_import_5.RefreshTokenDto
    ]),
    _ts_metadata("design:returntype", void 0)
], AuthController.prototype, "refreshToken", null);
AuthController = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Controller)("auth"),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _users_service__rspack_import_1.UsersService === "undefined" ? Object : _users_service__rspack_import_1.UsersService
    ])
], AuthController);


},
93(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ChangePasswordDto: () => (ChangePasswordDto)
});
/* import */ var class_validator__rspack_import_0 = __webpack_require__(20);
/* import */ var class_validator__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(class_validator__rspack_import_0);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}

class ChangePasswordDto {
    constructor(){
        _define_property(this, "currentPassword", void 0);
        _define_property(this, "newPassword", void 0);
    }
}
_ts_decorate([
    (0,class_validator__rspack_import_0.IsString)(),
    _ts_metadata("design:type", String)
], ChangePasswordDto.prototype, "currentPassword", void 0);
_ts_decorate([
    (0,class_validator__rspack_import_0.IsString)(),
    (0,class_validator__rspack_import_0.MinLength)(6),
    _ts_metadata("design:type", String)
], ChangePasswordDto.prototype, "newPassword", void 0);


},
91(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CreateUserDto: () => (CreateUserDto)
});
/* import */ var class_validator__rspack_import_0 = __webpack_require__(20);
/* import */ var class_validator__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(class_validator__rspack_import_0);
/* import */ var _common_enums_role_enum__rspack_import_1 = __webpack_require__(74);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}


class CreateUserDto {
    constructor(){
        _define_property(this, "username", void 0);
        _define_property(this, "password", void 0);
        _define_property(this, "role", void 0);
        _define_property(this, "name", void 0);
        _define_property(this, "lastName", void 0);
    }
}
_ts_decorate([
    (0,class_validator__rspack_import_0.IsString)(),
    (0,class_validator__rspack_import_0.MinLength)(3),
    _ts_metadata("design:type", String)
], CreateUserDto.prototype, "username", void 0);
_ts_decorate([
    (0,class_validator__rspack_import_0.IsString)(),
    (0,class_validator__rspack_import_0.MinLength)(6),
    _ts_metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
_ts_decorate([
    (0,class_validator__rspack_import_0.IsEnum)(_common_enums_role_enum__rspack_import_1.Role),
    _ts_metadata("design:type", typeof _common_enums_role_enum__rspack_import_1.Role === "undefined" ? Object : _common_enums_role_enum__rspack_import_1.Role)
], CreateUserDto.prototype, "role", void 0);
_ts_decorate([
    (0,class_validator__rspack_import_0.IsString)(),
    (0,class_validator__rspack_import_0.MinLength)(1),
    _ts_metadata("design:type", String)
], CreateUserDto.prototype, "name", void 0);
_ts_decorate([
    (0,class_validator__rspack_import_0.IsString)(),
    (0,class_validator__rspack_import_0.MinLength)(1),
    _ts_metadata("design:type", String)
], CreateUserDto.prototype, "lastName", void 0);


},
87(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  LoginUserDto: () => (LoginUserDto)
});
/* import */ var class_validator__rspack_import_0 = __webpack_require__(20);
/* import */ var class_validator__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(class_validator__rspack_import_0);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}

class LoginUserDto {
    constructor(){
        _define_property(this, "username", void 0);
        _define_property(this, "password", void 0);
    }
}
_ts_decorate([
    (0,class_validator__rspack_import_0.IsString)(),
    _ts_metadata("design:type", String)
], LoginUserDto.prototype, "username", void 0);
_ts_decorate([
    (0,class_validator__rspack_import_0.IsString)(),
    (0,class_validator__rspack_import_0.MinLength)(1),
    _ts_metadata("design:type", String)
], LoginUserDto.prototype, "password", void 0);


},
89(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  RefreshTokenDto: () => (RefreshTokenDto)
});
/* import */ var class_validator__rspack_import_0 = __webpack_require__(20);
/* import */ var class_validator__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(class_validator__rspack_import_0);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}

class RefreshTokenDto {
    constructor(){
        _define_property(this, "refreshToken", void 0);
    }
}
_ts_decorate([
    (0,class_validator__rspack_import_0.IsString)(),
    (0,class_validator__rspack_import_0.MinLength)(1),
    _ts_metadata("design:type", String)
], RefreshTokenDto.prototype, "refreshToken", void 0);


},
92(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  UpdateUserDto: () => (UpdateUserDto)
});
/* import */ var _nestjs_mapped_types__rspack_import_0 = __webpack_require__(67);
/* import */ var _nestjs_mapped_types__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_nestjs_mapped_types__rspack_import_0);
/* import */ var _create_user_dto__rspack_import_1 = __webpack_require__(91);


class UpdateUserDto extends (0,_nestjs_mapped_types__rspack_import_0.PartialType)((0,_nestjs_mapped_types__rspack_import_0.OmitType)(_create_user_dto__rspack_import_1.CreateUserDto, [
    "password"
])) {
}


},
83(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  User: () => (User),
  UserSchema: () => (UserSchema)
});
/* import */ var _nestjs_mongoose__rspack_import_0 = __webpack_require__(9);
/* import */ var _nestjs_mongoose__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__rspack_import_0);
/* import */ var bcrypt__rspack_import_1 = __webpack_require__(84);
/* import */ var bcrypt__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(bcrypt__rspack_import_1);
/* import */ var _common_enums_role_enum__rspack_import_2 = __webpack_require__(74);
/* import */ var _common_utils__rspack_import_3 = __webpack_require__(56);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}




const SALT_ROUNDS = 10;
class User {
    constructor(){
        _define_property(this, "username", void 0);
        _define_property(this, "password", void 0);
        _define_property(this, "role", void 0);
        _define_property(this, "name", void 0);
        _define_property(this, "lastName", void 0);
        _define_property(this, "enabled", void 0);
    }
}
_ts_decorate([
    (0,_nestjs_mongoose__rspack_import_0.Prop)({
        required: true,
        unique: true,
        trim: true,
        index: true
    }),
    _ts_metadata("design:type", String)
], User.prototype, "username", void 0);
_ts_decorate([
    (0,_nestjs_mongoose__rspack_import_0.Prop)({
        required: true
    }),
    _ts_metadata("design:type", String)
], User.prototype, "password", void 0);
_ts_decorate([
    (0,_nestjs_mongoose__rspack_import_0.Prop)({
        required: true,
        type: String,
        enum: _common_enums_role_enum__rspack_import_2.Role,
        default: _common_enums_role_enum__rspack_import_2.Role.USER
    }),
    _ts_metadata("design:type", typeof _common_enums_role_enum__rspack_import_2.Role === "undefined" ? Object : _common_enums_role_enum__rspack_import_2.Role)
], User.prototype, "role", void 0);
_ts_decorate([
    (0,_nestjs_mongoose__rspack_import_0.Prop)({
        required: true,
        trim: true
    }),
    _ts_metadata("design:type", String)
], User.prototype, "name", void 0);
_ts_decorate([
    (0,_nestjs_mongoose__rspack_import_0.Prop)({
        required: true,
        trim: true
    }),
    _ts_metadata("design:type", String)
], User.prototype, "lastName", void 0);
_ts_decorate([
    (0,_nestjs_mongoose__rspack_import_0.Prop)({
        default: true
    }),
    _ts_metadata("design:type", Boolean)
], User.prototype, "enabled", void 0);
User = _ts_decorate([
    (0,_nestjs_mongoose__rspack_import_0.Schema)({
        timestamps: true,
        collection: "users"
    })
], User);
const UserSchema = _nestjs_mongoose__rspack_import_0.SchemaFactory.createForClass(User);
UserSchema.pre("save", async function() {
    const user = this;
    if (!user.isModified("password")) {
        return;
    }
    user.password = await bcrypt__rspack_import_1.hash(user.password, SALT_ROUNDS);
});
UserSchema.methods.comparePassword = function(candidate) {
    return bcrypt__rspack_import_1.compare(candidate, this.password);
};
(0,_common_utils__rspack_import_3.applyToJSONTransform)(UserSchema, [
    "password"
]);


},
90(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  UsersController: () => (UsersController)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(1);
/* import */ var _nestjs_common__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__rspack_import_0);
/* import */ var _users_service__rspack_import_1 = __webpack_require__(86);
/* import */ var _dto_create_user_dto__rspack_import_2 = __webpack_require__(91);
/* import */ var _dto_update_user_dto__rspack_import_3 = __webpack_require__(92);
/* import */ var _dto_change_password_dto__rspack_import_4 = __webpack_require__(93);
/* import */ var _common_dto_pagination_query_dto__rspack_import_5 = __webpack_require__(68);
/* import */ var _common_guards_jwt_auth_guard__rspack_import_6 = __webpack_require__(70);
/* import */ var _common_guards_permissions_guard__rspack_import_7 = __webpack_require__(71);
/* import */ var _common_permissions_require_permission_decorator__rspack_import_8 = __webpack_require__(72);
/* import */ var _common_decorators_current_user_decorator__rspack_import_9 = __webpack_require__(88);
/* import */ var _common_auth_jwt_strategy__rspack_import_10 = __webpack_require__(53);
/* import */ var _common_permissions_permissions_matrix__rspack_import_11 = __webpack_require__(73);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}












class UsersController {
    getOwnProfile(currentUser) {
        return this.usersService.findById(currentUser.userId);
    }
    changeOwnPassword(currentUser, dto) {
        return this.usersService.changeOwnPassword(currentUser.userId, dto);
    }
    create(dto) {
        return this.usersService.create(dto);
    }
    findAll(query) {
        return this.usersService.findAll(query);
    }
    findOne(id) {
        return this.usersService.findById(id);
    }
    update(id, dto) {
        return this.usersService.update(id, dto);
    }
    disable(id) {
        return this.usersService.disable(id);
    }
    enable(id) {
        return this.usersService.enable(id);
    }
    constructor(usersService){
        _define_property(this, "usersService", void 0);
        this.usersService = usersService;
    }
}
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.UseGuards)(_common_guards_jwt_auth_guard__rspack_import_6.JwtAuthGuard),
    (0,_nestjs_common__rspack_import_0.Get)("me"),
    _ts_param(0, (0,_common_decorators_current_user_decorator__rspack_import_9.CurrentUser)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _common_auth_jwt_strategy__rspack_import_10.RequestUser === "undefined" ? Object : _common_auth_jwt_strategy__rspack_import_10.RequestUser
    ]),
    _ts_metadata("design:returntype", void 0)
], UsersController.prototype, "getOwnProfile", null);
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.UseGuards)(_common_guards_jwt_auth_guard__rspack_import_6.JwtAuthGuard),
    (0,_nestjs_common__rspack_import_0.Patch)("me/password"),
    _ts_param(0, (0,_common_decorators_current_user_decorator__rspack_import_9.CurrentUser)()),
    _ts_param(1, (0,_nestjs_common__rspack_import_0.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _common_auth_jwt_strategy__rspack_import_10.RequestUser === "undefined" ? Object : _common_auth_jwt_strategy__rspack_import_10.RequestUser,
        typeof _dto_change_password_dto__rspack_import_4.ChangePasswordDto === "undefined" ? Object : _dto_change_password_dto__rspack_import_4.ChangePasswordDto
    ]),
    _ts_metadata("design:returntype", void 0)
], UsersController.prototype, "changeOwnPassword", null);
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.UseGuards)(_common_guards_jwt_auth_guard__rspack_import_6.JwtAuthGuard, _common_guards_permissions_guard__rspack_import_7.PermissionsGuard),
    (0,_common_permissions_require_permission_decorator__rspack_import_8.RequirePermission)(_common_permissions_permissions_matrix__rspack_import_11.ModuleNameEnum.USERS, _common_permissions_permissions_matrix__rspack_import_11.ActionEnum.CREATE),
    (0,_nestjs_common__rspack_import_0.Post)(),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _dto_create_user_dto__rspack_import_2.CreateUserDto === "undefined" ? Object : _dto_create_user_dto__rspack_import_2.CreateUserDto
    ]),
    _ts_metadata("design:returntype", void 0)
], UsersController.prototype, "create", null);
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.UseGuards)(_common_guards_jwt_auth_guard__rspack_import_6.JwtAuthGuard, _common_guards_permissions_guard__rspack_import_7.PermissionsGuard),
    (0,_common_permissions_require_permission_decorator__rspack_import_8.RequirePermission)(_common_permissions_permissions_matrix__rspack_import_11.ModuleNameEnum.USERS, _common_permissions_permissions_matrix__rspack_import_11.ActionEnum.READ),
    (0,_nestjs_common__rspack_import_0.Get)(),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Query)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _common_dto_pagination_query_dto__rspack_import_5.PaginationQueryDto === "undefined" ? Object : _common_dto_pagination_query_dto__rspack_import_5.PaginationQueryDto
    ]),
    _ts_metadata("design:returntype", void 0)
], UsersController.prototype, "findAll", null);
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.UseGuards)(_common_guards_jwt_auth_guard__rspack_import_6.JwtAuthGuard, _common_guards_permissions_guard__rspack_import_7.PermissionsGuard),
    (0,_common_permissions_require_permission_decorator__rspack_import_8.RequirePermission)(_common_permissions_permissions_matrix__rspack_import_11.ModuleNameEnum.USERS, _common_permissions_permissions_matrix__rspack_import_11.ActionEnum.READ),
    (0,_nestjs_common__rspack_import_0.Get)(":id"),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Param)("id")),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", void 0)
], UsersController.prototype, "findOne", null);
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.UseGuards)(_common_guards_jwt_auth_guard__rspack_import_6.JwtAuthGuard, _common_guards_permissions_guard__rspack_import_7.PermissionsGuard),
    (0,_common_permissions_require_permission_decorator__rspack_import_8.RequirePermission)(_common_permissions_permissions_matrix__rspack_import_11.ModuleNameEnum.USERS, _common_permissions_permissions_matrix__rspack_import_11.ActionEnum.UPDATE),
    (0,_nestjs_common__rspack_import_0.Patch)(":id"),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Param)("id")),
    _ts_param(1, (0,_nestjs_common__rspack_import_0.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        typeof _dto_update_user_dto__rspack_import_3.UpdateUserDto === "undefined" ? Object : _dto_update_user_dto__rspack_import_3.UpdateUserDto
    ]),
    _ts_metadata("design:returntype", void 0)
], UsersController.prototype, "update", null);
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.UseGuards)(_common_guards_jwt_auth_guard__rspack_import_6.JwtAuthGuard, _common_guards_permissions_guard__rspack_import_7.PermissionsGuard),
    (0,_common_permissions_require_permission_decorator__rspack_import_8.RequirePermission)(_common_permissions_permissions_matrix__rspack_import_11.ModuleNameEnum.USERS, _common_permissions_permissions_matrix__rspack_import_11.ActionEnum.DELETE),
    (0,_nestjs_common__rspack_import_0.Delete)(":id"),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Param)("id")),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", void 0)
], UsersController.prototype, "disable", null);
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.UseGuards)(_common_guards_jwt_auth_guard__rspack_import_6.JwtAuthGuard, _common_guards_permissions_guard__rspack_import_7.PermissionsGuard),
    (0,_common_permissions_require_permission_decorator__rspack_import_8.RequirePermission)(_common_permissions_permissions_matrix__rspack_import_11.ModuleNameEnum.USERS, _common_permissions_permissions_matrix__rspack_import_11.ActionEnum.DELETE),
    (0,_nestjs_common__rspack_import_0.Patch)(":id/enable"),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Param)("id")),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", void 0)
], UsersController.prototype, "enable", null);
UsersController = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Controller)("users"),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _users_service__rspack_import_1.UsersService === "undefined" ? Object : _users_service__rspack_import_1.UsersService
    ])
], UsersController);


},
82(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  UsersModule: () => (UsersModule)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(1);
/* import */ var _nestjs_common__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__rspack_import_0);
/* import */ var _nestjs_mongoose__rspack_import_1 = __webpack_require__(9);
/* import */ var _nestjs_mongoose__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__rspack_import_1);
/* import */ var _schemas_user_schema__rspack_import_2 = __webpack_require__(83);
/* import */ var _auth_controller__rspack_import_3 = __webpack_require__(85);
/* import */ var _users_controller__rspack_import_4 = __webpack_require__(90);
/* import */ var _users_service__rspack_import_5 = __webpack_require__(86);
/* import */ var _mongoose_connection__rspack_import_6 = __webpack_require__(64);
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}







class UsersModule {
}
UsersModule = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Module)({
        imports: [
            _nestjs_mongoose__rspack_import_1.MongooseModule.forFeature([
                {
                    name: _schemas_user_schema__rspack_import_2.User.name,
                    schema: _schemas_user_schema__rspack_import_2.UserSchema
                }
            ], _mongoose_connection__rspack_import_6.connectionName)
        ],
        controllers: [
            _auth_controller__rspack_import_3.AuthController,
            _users_controller__rspack_import_4.UsersController
        ],
        providers: [
            _users_service__rspack_import_5.UsersService
        ],
        exports: [
            _users_service__rspack_import_5.UsersService
        ]
    })
], UsersModule);


},
86(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  UsersService: () => (UsersService)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(1);
/* import */ var _nestjs_common__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__rspack_import_0);
/* import */ var _nestjs_mongoose__rspack_import_1 = __webpack_require__(9);
/* import */ var _nestjs_mongoose__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__rspack_import_1);
/* import */ var _nestjs_jwt__rspack_import_2 = __webpack_require__(51);
/* import */ var _nestjs_jwt__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(_nestjs_jwt__rspack_import_2);
/* import */ var mongoose__rspack_import_3 = __webpack_require__(14);
/* import */ var mongoose__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(mongoose__rspack_import_3);
/* import */ var _schemas_user_schema__rspack_import_4 = __webpack_require__(83);
/* import */ var _common_helpers_paginate__rspack_import_5 = __webpack_require__(63);
/* import */ var _mongoose_connection__rspack_import_6 = __webpack_require__(64);
/* import */ var _common_enums_role_enum__rspack_import_7 = __webpack_require__(74);
/* import */ var _common_permissions_permissions_env__rspack_import_8 = __webpack_require__(75);
/* import */ var _common_auth_jwt_env__rspack_import_9 = __webpack_require__(55);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}










const conflictError = "Nome de usuário já está em uso";
const notFoundError = "Usuário não encontrado";
const userOrPassError = "Usuário ou senha inválidos";
class UsersService {
    async create(dto) {
        if (dto.username === (0,_common_permissions_permissions_env__rspack_import_8.visitorUsername)()) {
            throw new _nestjs_common__rspack_import_0.ConflictException("O username não pode ser usado");
        }
        const existing = await this.userModel.findOne({
            username: dto.username
        });
        if (existing) {
            throw new _nestjs_common__rspack_import_0.ConflictException(conflictError);
        }
        const created = new this.userModel(dto);
        return created.save();
    }
    findAll(query) {
        return (0,_common_helpers_paginate__rspack_import_5.paginateWithQuery)(this.userModel, query);
    }
    async findById(id) {
        const user = await this.userModel.findById(id);
        if (!user) {
            throw new _nestjs_common__rspack_import_0.NotFoundException(notFoundError);
        }
        return user;
    }
    async update(id, dto) {
        const user = await this.findById(id);
        if (dto.username && dto.username !== user.username) {
            const existing = await this.userModel.findOne({
                username: dto.username
            });
            if (existing) {
                throw new _nestjs_common__rspack_import_0.ConflictException(conflictError);
            }
        }
        Object.assign(user, dto);
        return user.save();
    }
    async disable(id) {
        const user = await this.findById(id);
        user.enabled = false;
        return user.save();
    }
    async enable(id) {
        const user = await this.findById(id);
        user.enabled = true;
        return user.save();
    }
    async changeOwnPassword(userId, dto) {
        const user = await this.findById(userId);
        const isMatch = await user.comparePassword(dto.currentPassword);
        if (!isMatch) {
            throw new _nestjs_common__rspack_import_0.UnauthorizedException("Senha atual incorreta");
        }
        user.password = dto.newPassword;
        await user.save();
        return {
            success: true
        };
    }
    async login(dto) {
        if ((0,_common_permissions_permissions_env__rspack_import_8.acceptVisitors)() && dto.username === (0,_common_permissions_permissions_env__rspack_import_8.visitorUsername)()) {
            if (dto.password !== (0,_common_permissions_permissions_env__rspack_import_8.visitorUsername)()) {
                throw new _nestjs_common__rspack_import_0.UnauthorizedException(userOrPassError);
            }
            return this.loginAsVisitor();
        }
        const user = await this.userModel.findOne({
            username: dto.username
        });
        if (!user) {
            throw new _nestjs_common__rspack_import_0.UnauthorizedException(userOrPassError);
        }
        if (!user.enabled) {
            throw new _nestjs_common__rspack_import_0.UnauthorizedException("Usuário desabilitado");
        }
        const isMatch = await user.comparePassword(dto.password);
        if (!isMatch) {
            throw new _nestjs_common__rspack_import_0.UnauthorizedException(userOrPassError);
        }
        return {
            ...await this.generateTokens(user),
            user: {
                username: user.username,
                role: user.role,
                name: user.name,
                lastName: user.lastName
            }
        };
    }
    async refreshToken(currentUser, dto) {
        if ((0,_common_permissions_permissions_env__rspack_import_8.acceptVisitors)() && currentUser.username === (0,_common_permissions_permissions_env__rspack_import_8.visitorUsername)()) {
            const { accessToken, refreshToken } = await this.loginAsVisitor();
            return {
                accessToken,
                refreshToken
            };
        }
        const user = await this.checkRefreshToken(currentUser, dto);
        return this.generateTokens(user);
    }
    async checkRefreshToken(currentUser, dto) {
        const id = this.jwtService.decode(dto.refreshToken)["sub"];
        if (id !== currentUser.userId) {
            this.logger.error("O usuário não é compatível com a requisição");
            throw new _nestjs_common__rspack_import_0.NotFoundException(notFoundError);
        }
        const user = await this.userModel.findById(id);
        if (!user) {
            throw new _nestjs_common__rspack_import_0.NotFoundException(notFoundError);
        }
        try {
            this.jwtService.verify(dto.refreshToken, {
                secret: (0,_common_auth_jwt_env__rspack_import_9.getjwtSecretRefresh)()
            });
            return user;
        } catch (error) {
            const err = error;
            this.logger.error("Erro ao validar o token", error);
            if (err.name === "JsonWebTokenError") {
                throw new _nestjs_common__rspack_import_0.UnauthorizedException("Assinatura Inválida");
            }
            if (err.name === "TokenExpiredError") {
                throw new _nestjs_common__rspack_import_0.UnauthorizedException("Token Expirado");
            }
            throw new _nestjs_common__rspack_import_0.UnauthorizedException(err.name);
        }
    }
    async loginAsVisitor() {
        const username = (0,_common_permissions_permissions_env__rspack_import_8.visitorUsername)();
        const role = _common_enums_role_enum__rspack_import_7.Role.VISITOR;
        return {
            ...await this.generateTokens({
                id: username,
                username,
                role
            }),
            user: {
                username,
                role,
                name: username,
                lastName: username
            }
        };
    }
    async generateTokens(user) {
        return {
            accessToken: await this.generateAccessToken(user),
            refreshToken: await this.generateRefreshToken(user)
        };
    }
    async generateAccessToken(user) {
        const options = {
            secret: (0,_common_auth_jwt_env__rspack_import_9.getjwtSecret)(),
            expiresIn: (0,_common_auth_jwt_env__rspack_import_9.getjwtExpiresIn)()
        };
        return this.generateToken(user, options);
    }
    async generateRefreshToken(user) {
        const options = {
            secret: (0,_common_auth_jwt_env__rspack_import_9.getjwtSecretRefresh)(),
            expiresIn: (0,_common_auth_jwt_env__rspack_import_9.getjwtExpiresInRefresh)()
        };
        return this.generateToken(user, options);
    }
    async generateToken(user, options) {
        const payload = {
            sub: user.id,
            username: user.username,
            role: user.role
        };
        const token = await this.jwtService.signAsync(payload, options);
        return token;
    }
    constructor(userModel, jwtService){
        _define_property(this, "userModel", void 0);
        _define_property(this, "jwtService", void 0);
        _define_property(this, "logger", void 0);
        this.userModel = userModel;
        this.jwtService = jwtService;
        this.logger = new _nestjs_common__rspack_import_0.Logger(UsersService.name);
    }
}
UsersService = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Injectable)(),
    _ts_param(0, (0,_nestjs_mongoose__rspack_import_1.InjectModel)(_schemas_user_schema__rspack_import_4.User.name, _mongoose_connection__rspack_import_6.connectionName)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof mongoose__rspack_import_3.Model === "undefined" ? Object : mongoose__rspack_import_3.Model,
        typeof _nestjs_jwt__rspack_import_2.JwtService === "undefined" ? Object : _nestjs_jwt__rspack_import_2.JwtService
    ])
], UsersService);


},
64(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  connectionName: () => (connectionName)
});
const connectionName = "restaurants";


},
47(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);



},
46(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ValidationMessages: () => (ValidationMessages)
});
const ValidationMessages = Object.freeze({
    IS_NOT_EMPTY: 'Campo $property não pode ser vazio.',
    IS_NOT_DATE: 'Campo $property não é uma data válida.',
    IS_NOT_NUMBER: 'Campo $property não é um número válido.'
});


},
48(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  forceNumber: () => (forceNumber),
  forceString: () => (forceString)
});
const forceNumber = (num)=>Number(num) || 0;
const forceString = (str)=>String(str) || '';


},
38(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  moduleList: () => (moduleList)
});
/* import */ var _nestjs_mongoose__rspack_import_0 = __webpack_require__(9);
/* import */ var _nestjs_mongoose__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__rspack_import_0);
/* import */ var _modules_links_links_module__rspack_import_1 = __webpack_require__(39);
/* import */ var _mongoose_connection__rspack_import_2 = __webpack_require__(44);
/* import */ var _common_utils__rspack_import_3 = __webpack_require__(48);




const moduleList = [
    _nestjs_mongoose__rspack_import_0.MongooseModule.forRoot((0,_common_utils__rspack_import_3.forceString)(process.env.MONGO_URI_SHRTR ?? process.env.MONGO_URI), {
        connectionName: _mongoose_connection__rspack_import_2.connectionName
    }),
    _modules_links_links_module__rspack_import_1.LinksModule
];


},
45(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  LinkAddRequestDTO: () => (LinkAddRequestDTO)
});
/* import */ var class_validator__rspack_import_0 = __webpack_require__(20);
/* import */ var class_validator__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(class_validator__rspack_import_0);
/* import */ var _common_messages_validation_messages_constants__rspack_import_1 = __webpack_require__(46);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}


class LinkAddRequestDTO {
    constructor(){
        _define_property(this, "link", void 0);
        _define_property(this, "shrt", void 0);
    }
}
_ts_decorate([
    (0,class_validator__rspack_import_0.IsString)(),
    (0,class_validator__rspack_import_0.IsNotEmpty)({
        message: _common_messages_validation_messages_constants__rspack_import_1.ValidationMessages.IS_NOT_EMPTY
    }),
    _ts_metadata("design:type", String)
], LinkAddRequestDTO.prototype, "link", void 0);
_ts_decorate([
    (0,class_validator__rspack_import_0.IsString)(),
    (0,class_validator__rspack_import_0.IsOptional)(),
    _ts_metadata("design:type", String)
], LinkAddRequestDTO.prototype, "shrt", void 0);


},
43(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  LinkResponseDTO: () => (LinkResponseDTO)
});
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
class LinkResponseDTO {
    constructor(id, link, shrt){
        _define_property(this, "id", void 0);
        _define_property(this, "link", void 0);
        _define_property(this, "shrt", void 0);
        this.id = id;
        this.link = link;
        this.shrt = shrt;
    }
}
_define_property(LinkResponseDTO, "from", ({ _id, link, shrt })=>new LinkResponseDTO(_id.toHexString(), link, shrt));


},
40(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Link: () => (Link),
  LinkSchema: () => (LinkSchema)
});
/* import */ var _nestjs_mongoose__rspack_import_0 = __webpack_require__(9);
/* import */ var _nestjs_mongoose__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__rspack_import_0);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}

class Link {
    constructor(shrt, link){
        _define_property(this, "shrt", void 0);
        _define_property(this, "link", void 0);
        this.shrt = shrt;
        this.link = link;
    }
}
_ts_decorate([
    (0,_nestjs_mongoose__rspack_import_0.Prop)({
        required: true,
        type: String
    }),
    _ts_metadata("design:type", String)
], Link.prototype, "shrt", void 0);
_ts_decorate([
    (0,_nestjs_mongoose__rspack_import_0.Prop)({
        required: true,
        type: String
    }),
    _ts_metadata("design:type", String)
], Link.prototype, "link", void 0);
Link = _ts_decorate([
    (0,_nestjs_mongoose__rspack_import_0.Schema)({
        collection: 'link'
    }),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        String
    ])
], Link);
const LinkSchema = _nestjs_mongoose__rspack_import_0.SchemaFactory.createForClass(Link);


},
41(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  LinksController: () => (LinksController)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(1);
/* import */ var _nestjs_common__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__rspack_import_0);
/* import */ var _links_service__rspack_import_1 = __webpack_require__(42);
/* import */ var _dto_link_add_request_dto__rspack_import_2 = __webpack_require__(45);
/* import */ var _common_interfaces_http_interfaces__rspack_import_3 = __webpack_require__(47);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}




class LinksController {
    async findAll() {
        try {
            return await this.linksService.findAll();
        } catch (err) {
            this.logger.error(err);
            throw new _nestjs_common__rspack_import_0.HttpException(err.message, _nestjs_common__rspack_import_0.HttpStatus.BAD_REQUEST);
        }
    }
    async find(response, shrt) {
        const redirectToError = ()=>response.status(302).redirect(`${process.env.SHRTR_HOME}?error`);
        try {
            const data = await this.linksService.findOneByShrt(shrt);
            if (data?.link !== undefined) {
                let { link } = data;
                link = /https?:\/\//.test(link) ? link : `http://${link}`;
                response.status(302).redirect(link);
                return;
            }
            this.logger.error('Not found');
            redirectToError();
            return;
        } catch (err) {
            this.logger.error(err);
            redirectToError();
        }
    }
    async count() {
        try {
            return await this.linksService.count();
        } catch (err) {
            this.logger.error(err);
            throw new _nestjs_common__rspack_import_0.HttpException(err.message, _nestjs_common__rspack_import_0.HttpStatus.BAD_REQUEST);
        }
    }
    async add(requestDto) {
        try {
            const result = await this.linksService.generate(requestDto);
            return result;
        } catch (err) {
            this.logger.error(err);
            throw new _nestjs_common__rspack_import_0.HttpException(err.message, _nestjs_common__rspack_import_0.HttpStatus.BAD_REQUEST);
        }
    }
    constructor(linksService){
        _define_property(this, "linksService", void 0);
        _define_property(this, "logger", void 0);
        this.linksService = linksService;
        this.logger = new _nestjs_common__rspack_import_0.Logger(LinksController.name);
    }
}
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.Get)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", Promise)
], LinksController.prototype, "findAll", null);
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.Get)('@/:shrt'),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Res)()),
    _ts_param(1, (0,_nestjs_common__rspack_import_0.Param)('shrt')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _common_interfaces_http_interfaces__rspack_import_3.ApiResponse === "undefined" ? Object : _common_interfaces_http_interfaces__rspack_import_3.ApiResponse,
        String
    ]),
    _ts_metadata("design:returntype", Promise)
], LinksController.prototype, "find", null);
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.Get)('count'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", Promise)
], LinksController.prototype, "count", null);
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.Post)(),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _dto_link_add_request_dto__rspack_import_2.LinkAddRequestDTO === "undefined" ? Object : _dto_link_add_request_dto__rspack_import_2.LinkAddRequestDTO
    ]),
    _ts_metadata("design:returntype", Promise)
], LinksController.prototype, "add", null);
LinksController = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Controller)('links'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _links_service__rspack_import_1.LinksService === "undefined" ? Object : _links_service__rspack_import_1.LinksService
    ])
], LinksController);


},
39(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  LinksModule: () => (LinksModule)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(1);
/* import */ var _nestjs_common__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__rspack_import_0);
/* import */ var _nestjs_mongoose__rspack_import_1 = __webpack_require__(9);
/* import */ var _nestjs_mongoose__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__rspack_import_1);
/* import */ var _link_entity__rspack_import_2 = __webpack_require__(40);
/* import */ var _links_controller__rspack_import_3 = __webpack_require__(41);
/* import */ var _links_service__rspack_import_4 = __webpack_require__(42);
/* import */ var _mongoose_connection__rspack_import_5 = __webpack_require__(44);
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}






class LinksModule {
}
LinksModule = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Module)({
        imports: [
            _nestjs_mongoose__rspack_import_1.MongooseModule.forFeature([
                {
                    name: _link_entity__rspack_import_2.Link.name,
                    schema: _link_entity__rspack_import_2.LinkSchema
                }
            ], _mongoose_connection__rspack_import_5.connectionName)
        ],
        providers: [
            _links_service__rspack_import_4.LinksService
        ],
        controllers: [
            _links_controller__rspack_import_3.LinksController
        ],
        exports: []
    })
], LinksModule);


},
42(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  LinksService: () => (LinksService)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(1);
/* import */ var _nestjs_common__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__rspack_import_0);
/* import */ var _nestjs_mongoose__rspack_import_1 = __webpack_require__(9);
/* import */ var _nestjs_mongoose__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__rspack_import_1);
/* import */ var mongoose__rspack_import_2 = __webpack_require__(14);
/* import */ var mongoose__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(mongoose__rspack_import_2);
/* import */ var _link_entity__rspack_import_3 = __webpack_require__(40);
/* import */ var _dto_link_response_dto__rspack_import_4 = __webpack_require__(43);
/* import */ var _mongoose_connection__rspack_import_5 = __webpack_require__(44);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}






const { ObjectId } = mongoose__rspack_import_2.Types;
class LinksService {
    async findOneByShrt(shrt) {
        try {
            const link = await this.linkModel.findOne({
                shrt
            }).exec();
            if (link === null) {
                return null;
            }
            return _dto_link_response_dto__rspack_import_4.LinkResponseDTO.from(link);
        } catch (error) {
            const message = 'Error finding the link by alias';
            this.logger.error(message, error);
            throw new _nestjs_common__rspack_import_0.HttpException(message, _nestjs_common__rspack_import_0.HttpStatus.BAD_REQUEST);
        }
    }
    async findOne(id) {
        try {
            const _id = new ObjectId(id);
            const link = await this.linkModel.findById(_id).exec();
            if (link === null) {
                return null;
            }
            return _dto_link_response_dto__rspack_import_4.LinkResponseDTO.from(link);
        } catch (error) {
            const message = 'Error finding the link';
            this.logger.error(message, error);
            throw new _nestjs_common__rspack_import_0.HttpException(message, _nestjs_common__rspack_import_0.HttpStatus.BAD_REQUEST);
        }
    }
    async findAll() {
        try {
            const links = await this.linkModel.find().exec();
            return links.map(_dto_link_response_dto__rspack_import_4.LinkResponseDTO.from);
        } catch (error) {
            const message = 'Error finding links';
            this.logger.error(message, error);
            throw new _nestjs_common__rspack_import_0.HttpException(message, _nestjs_common__rspack_import_0.HttpStatus.BAD_REQUEST);
        }
    }
    async existsByShrt(shrt) {
        return await this.exists({
            shrt
        });
    }
    async exists(query) {
        try {
            return (await this.linkModel.exists(query))?._id !== undefined;
        } catch (error) {
            const message = 'Error validating existence of the link';
            this.logger.error(message, error);
            throw new _nestjs_common__rspack_import_0.HttpException(message, _nestjs_common__rspack_import_0.HttpStatus.BAD_REQUEST);
        }
    }
    async count() {
        try {
            return await this.linkModel.countDocuments().exec();
        } catch (error) {
            const message = 'Error counting links';
            this.logger.error(message, error);
            throw new _nestjs_common__rspack_import_0.HttpException(message, _nestjs_common__rspack_import_0.HttpStatus.BAD_REQUEST);
        }
    }
    async add(requestDto) {
        try {
            const newLink = new this.linkModel();
            newLink.link = requestDto.link;
            newLink.shrt = requestDto.shrt ?? '';
            const link = await newLink.save();
            return _dto_link_response_dto__rspack_import_4.LinkResponseDTO.from(link);
        } catch (error) {
            const message = 'Error adding the link';
            this.logger.error(message, error);
            throw new _nestjs_common__rspack_import_0.HttpException(message, _nestjs_common__rspack_import_0.HttpStatus.BAD_REQUEST);
        }
    }
    async generate(requestDto, recursion = false) {
        const regenerate = ()=>{
            const shrt = (Math.random() * 9007199254740991).toString(36).replace('.', 'A');
            return this.generate({
                ...requestDto,
                shrt
            }, true);
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
                    return Promise.reject(new _nestjs_common__rspack_import_0.HttpException(message, _nestjs_common__rspack_import_0.HttpStatus.BAD_REQUEST));
                }
                return this.add(requestDto);
            }
            return regenerate();
        } catch (error) {
            const message = 'Error recording the link';
            this.logger.error(message, error);
            throw new _nestjs_common__rspack_import_0.HttpException(message, _nestjs_common__rspack_import_0.HttpStatus.BAD_REQUEST);
        }
    }
    constructor(linkModel){
        _define_property(this, "linkModel", void 0);
        _define_property(this, "logger", void 0);
        this.linkModel = linkModel;
        this.logger = new _nestjs_common__rspack_import_0.Logger(LinksService.name);
    }
}
LinksService = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Injectable)(),
    _ts_param(0, (0,_nestjs_mongoose__rspack_import_1.InjectModel)(_link_entity__rspack_import_3.Link.name, _mongoose_connection__rspack_import_5.connectionName)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof mongoose__rspack_import_2.Model === "undefined" ? Object : mongoose__rspack_import_2.Model
    ])
], LinksService);


},
44(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  connectionName: () => (connectionName)
});
const connectionName = 'shrtr';


},
1(module) {
module.exports = require("@nestjs/common");

},
6(module) {
module.exports = require("@nestjs/config");

},
2(module) {
module.exports = require("@nestjs/core");

},
51(module) {
module.exports = require("@nestjs/jwt");

},
67(module) {
module.exports = require("@nestjs/mapped-types");

},
9(module) {
module.exports = require("@nestjs/mongoose");

},
52(module) {
module.exports = require("@nestjs/passport");

},
3(module) {
module.exports = require("@nestjs/platform-fastify");

},
94(module) {
module.exports = require("@nestjs/schedule");

},
97(module) {
module.exports = require("axios");

},
84(module) {
module.exports = require("bcrypt");

},
69(module) {
module.exports = require("class-transformer");

},
20(module) {
module.exports = require("class-validator");

},
4(module) {
module.exports = require("helmet");

},
14(module) {
module.exports = require("mongoose");

},
54(module) {
module.exports = require("passport-jwt");

},
17(module) {
module.exports = require("crypto");

},

});
// The module cache
var __webpack_module_cache__ = {};

// The require function
function __webpack_require__(moduleId) {

// Check if module is in cache
var cachedModule = __webpack_module_cache__[moduleId];
if (cachedModule !== undefined) {
return cachedModule.exports;
}
// Create a new module (and put it into the cache)
var module = (__webpack_module_cache__[moduleId] = {
exports: {}
});
// Execute the module function
__webpack_modules__[moduleId](module, module.exports, __webpack_require__);

// Return the exports of the module
return module.exports;

}

// webpack/runtime/compat_get_default_export
(() => {
// getDefaultExport function for compatibility with non-ESM modules
__webpack_require__.n = (module) => {
	var getter = module && module.__esModule ?
		() => (module['default']) :
		() => (module);
	__webpack_require__.d(getter, { a: getter });
	return getter;
};

})();
// webpack/runtime/define_property_getters
(() => {
__webpack_require__.d = (exports, getters, values) => {
	var define = (defs, kind) => {
		for(var key in defs) {
			if(__webpack_require__.o(defs, key) && !__webpack_require__.o(exports, key)) {
				Object.defineProperty(exports, key, { enumerable: true, [kind]: defs[key] });
			}
		}
	};
	define(getters, "get");
	define(values, "value");
};
})();
// webpack/runtime/has_own_property
(() => {
__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
})();
// webpack/runtime/make_namespace_object
(() => {
// define __esModule on exports
__webpack_require__.r = (exports) => {
	if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	}
	Object.defineProperty(exports, '__esModule', { value: true });
};
})();
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(1);
/* import */ var _nestjs_common__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__rspack_import_0);
/* import */ var _nestjs_core__rspack_import_1 = __webpack_require__(2);
/* import */ var _nestjs_core__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_nestjs_core__rspack_import_1);
/* import */ var _nestjs_platform_fastify__rspack_import_2 = __webpack_require__(3);
/* import */ var _nestjs_platform_fastify__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(_nestjs_platform_fastify__rspack_import_2);
/* import */ var helmet__rspack_import_3 = __webpack_require__(4);
/* import */ var helmet__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(helmet__rspack_import_3);
/* import */ var _app_module__rspack_import_4 = __webpack_require__(5);





const bootstrap = async ()=>{
    const app = await _nestjs_core__rspack_import_1.NestFactory.create(_app_module__rspack_import_4.AppModule, new _nestjs_platform_fastify__rspack_import_2.FastifyAdapter());
    app.enableCors({
        origin: '*',
        methods: [
            'GET',
            'POST',
            'PUT',
            'DELETE',
            'OPTIONS',
            'PATCH'
        ],
        credentials: true
    });
    app.use(helmet__rspack_import_3_default()());
    app.useGlobalPipes(new _nestjs_common__rspack_import_0.ValidationPipe({
        transform: true
    }));
    await app.listen(process.env.PORT ?? 3000, process.env.ADDRESS ?? 'localhost');
};
bootstrap();

})();

})()
;
//# sourceMappingURL=main.js.map