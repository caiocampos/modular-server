/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 3 */
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
const config_1 = __webpack_require__(4);
const modules_expose_1 = __webpack_require__(5);
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule.forRoot(), ...modules_expose_1.moduleList],
    })
], AppModule);


/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.moduleList = void 0;
const AsteroidScoreModules = __webpack_require__(6);
const BlogPostsModules = __webpack_require__(20);
exports.moduleList = [...AsteroidScoreModules.moduleList, ...BlogPostsModules.moduleList];


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.moduleList = void 0;
const mongoose_1 = __webpack_require__(7);
const scores_module_1 = __webpack_require__(8);
const mongoose_connection_1 = __webpack_require__(16);
exports.moduleList = [
    mongoose_1.MongooseModule.forRoot((_a = process.env.MONGO_URI_SCORE) !== null && _a !== void 0 ? _a : process.env.MONGO_URI, {
        connectionName: mongoose_connection_1.connectionName,
    }),
    scores_module_1.ScoresModule,
];


/***/ }),
/* 7 */
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),
/* 8 */
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
const mongoose_1 = __webpack_require__(7);
const score_entity_1 = __webpack_require__(9);
const scores_controller_1 = __webpack_require__(10);
const scores_service_1 = __webpack_require__(11);
const mongoose_connection_1 = __webpack_require__(16);
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
/* 9 */
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
exports.ScoreSchema = exports.Score = void 0;
const mongoose_1 = __webpack_require__(7);
let Score = class Score {
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
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Score.prototype, "startTime", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: Date }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Score.prototype, "endTime", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: Number }),
    __metadata("design:type", Object)
], Score.prototype, "difficulty", void 0);
exports.Score = Score = __decorate([
    (0, mongoose_1.Schema)({ collection: 'scores' })
], Score);
exports.ScoreSchema = mongoose_1.SchemaFactory.createForClass(Score);


/***/ }),
/* 10 */
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
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ScoresController = void 0;
const common_1 = __webpack_require__(1);
const scores_service_1 = __webpack_require__(11);
const score_add_request_dto_1 = __webpack_require__(17);
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var ScoresService_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ScoresService = void 0;
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(7);
const mongoose_2 = __webpack_require__(12);
const score_entity_1 = __webpack_require__(9);
const score_response_dto_1 = __webpack_require__(13);
const utils_1 = __webpack_require__(14);
const mongoose_connection_1 = __webpack_require__(16);
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
/* 12 */
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),
/* 13 */
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
/* 14 */
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
exports.forceNumber = exports.testHash = void 0;
const crypto_1 = __webpack_require__(15);
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
    saltHash(object, (0, exports.forceNumber)(process.env.S_NUM), process.env.S_TEXT);
exports.testHash = testHash;
const forceNumber = (num) => Number(num) || 0;
exports.forceNumber = forceNumber;


/***/ }),
/* 15 */
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.connectionName = void 0;
exports.connectionName = 'asteroid-score';


/***/ }),
/* 17 */
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
const class_validator_1 = __webpack_require__(18);
const validation_messages_constants_1 = __webpack_require__(19);
class ScoreAddRequestDTO {
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
/* 18 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ValidationMessages = void 0;
exports.ValidationMessages = Object.freeze({
    IS_NOT_EMPTY: 'Campo $property não pode ser vazio.',
    IS_NOT_DATE: 'Campo $property não é uma data válida.',
    IS_NOT_NUMBER: 'Campo $property não é um número válido.',
});


/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.moduleList = void 0;
const mongoose_1 = __webpack_require__(7);
const authors_module_1 = __webpack_require__(21);
const posts_module_1 = __webpack_require__(32);
const mongoose_connection_1 = __webpack_require__(30);
exports.moduleList = [
    mongoose_1.MongooseModule.forRoot((_a = process.env.MONGO_URI_BLOG) !== null && _a !== void 0 ? _a : process.env.MONGO_URI, {
        connectionName: mongoose_connection_1.connectionName,
    }),
    authors_module_1.AuthorsModule,
    posts_module_1.PostsModule,
];


/***/ }),
/* 21 */
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
const mongoose_1 = __webpack_require__(7);
const post_entity_1 = __webpack_require__(22);
const author_entity_1 = __webpack_require__(23);
const authors_controller_1 = __webpack_require__(24);
const authors_service_1 = __webpack_require__(27);
const mongoose_connection_1 = __webpack_require__(30);
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
/* 22 */
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostSchema = exports.Post = void 0;
const mongoose_1 = __webpack_require__(7);
const mongoose_2 = __webpack_require__(12);
const author_entity_1 = __webpack_require__(23);
let Post = class Post {
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
    __metadata("design:type", typeof (_a = typeof author_entity_1.AuthorDocument !== "undefined" && author_entity_1.AuthorDocument) === "function" ? _a : Object)
], Post.prototype, "author", void 0);
exports.Post = Post = __decorate([
    (0, mongoose_1.Schema)({ collection: 'posts' })
], Post);
exports.PostSchema = mongoose_1.SchemaFactory.createForClass(Post);


/***/ }),
/* 23 */
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthorSchema = exports.Author = void 0;
const mongoose_1 = __webpack_require__(7);
const mongoose_2 = __webpack_require__(12);
let Author = class Author {
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
    __metadata("design:type", typeof (_a = typeof Array !== "undefined" && Array) === "function" ? _a : Object)
], Author.prototype, "posts", void 0);
exports.Author = Author = __decorate([
    (0, mongoose_1.Schema)({ collection: 'authors' })
], Author);
exports.AuthorSchema = mongoose_1.SchemaFactory.createForClass(Author);


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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthorsController = void 0;
const common_1 = __webpack_require__(1);
const post_add_request_dto_1 = __webpack_require__(25);
const authors_service_1 = __webpack_require__(27);
const author_add_request_dto_1 = __webpack_require__(31);
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
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof author_add_request_dto_1.default !== "undefined" && author_add_request_dto_1.default) === "function" ? _d : Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], AuthorsController.prototype, "add", null);
__decorate([
    (0, common_1.Post)(':id/posts'),
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
const class_validator_1 = __webpack_require__(18);
const validation_messages_constants_1 = __webpack_require__(26);
class PostAddRequestDTO {
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
/* 26 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ValidationMessages = void 0;
exports.ValidationMessages = Object.freeze({
    IS_NOT_EMPTY: 'Campo $property não pode ser vazio.',
    IS_NOT_DATE: 'Campo $property não é uma data válida.',
});


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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var AuthorsService_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthorsService = void 0;
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(7);
const class_validator_1 = __webpack_require__(18);
const mongoose_2 = __webpack_require__(12);
const post_response_dto_1 = __webpack_require__(28);
const post_entity_1 = __webpack_require__(22);
const author_entity_1 = __webpack_require__(23);
const author_response_dto_1 = __webpack_require__(29);
const mongoose_connection_1 = __webpack_require__(30);
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
/* 28 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const author_response_dto_1 = __webpack_require__(29);
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
/* 29 */
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
/* 30 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.connectionName = void 0;
exports.connectionName = 'blog-posts';


/***/ }),
/* 31 */
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
const class_validator_1 = __webpack_require__(18);
const validation_messages_constants_1 = __webpack_require__(26);
class AuthorAddRequestDTO {
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
/* 32 */
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
const mongoose_1 = __webpack_require__(7);
const author_entity_1 = __webpack_require__(23);
const post_entity_1 = __webpack_require__(22);
const posts_controller_1 = __webpack_require__(33);
const posts_service_1 = __webpack_require__(34);
const mongoose_connection_1 = __webpack_require__(30);
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostsController = void 0;
const common_1 = __webpack_require__(1);
const posts_service_1 = __webpack_require__(34);
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
/* 34 */
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
var PostsService_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostsService = void 0;
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(7);
const mongoose_2 = __webpack_require__(12);
const post_entity_1 = __webpack_require__(22);
const post_response_dto_1 = __webpack_require__(28);
const author_entity_1 = __webpack_require__(23);
const mongoose_connection_1 = __webpack_require__(30);
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const common_1 = __webpack_require__(1);
const core_1 = __webpack_require__(2);
const app_module_1 = __webpack_require__(3);
const bootstrap = async () => {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'OPTIONS,GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
        next();
    });
    await app.listen(3000);
};
bootstrap();

})();

/******/ })()
;