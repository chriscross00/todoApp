"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDB = connectToDB;
exports.setupDB = setupDB;
const sqlite3_1 = __importDefault(require("sqlite3"));
const sqlite_1 = require("sqlite");
function connectToDB(dbFile) {
    return __awaiter(this, void 0, void 0, function* () {
        const db = yield (0, sqlite_1.open)({
            filename: dbFile,
            driver: sqlite3_1.default.Database
        });
        return db;
    });
}
function createDataModel(db) {
    return __awaiter(this, void 0, void 0, function* () {
        const qr = `CREATE TABLE task (
        db_pk INTEGER PRIMARY KEY, 
        id TEXT NOT NULL, 
        name TEXT NOT NULL,
        completed BYTE NOT NULL)`;
        try {
            const result = yield db.exec(qr);
        }
        catch (error) {
            console.log('Failed to create data model');
            console.log(error);
        }
        return;
    });
}
function checkForDataModel(db) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield db.all("SELECT * FROM sqlite_master WHERE type='table'");
        if (result.length == 0)
            createDataModel(db);
        yield db.close();
        return;
    });
}
function setupDB() {
    return __awaiter(this, void 0, void 0, function* () {
        const dbFile = './db/task.db';
        if (typeof dbFile === 'undefined') {
            throw new Error("Env var `dbFile` is not defined");
        }
        const db = yield connectToDB(dbFile);
        checkForDataModel(db);
        console.log('hello world');
        return;
    });
}
