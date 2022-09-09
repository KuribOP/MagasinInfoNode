"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBPASS = exports.DBUSER = exports.DBNAME = exports.PORT = void 0;
exports.PORT = process.env.PORT || 8000;
exports.DBNAME = (process.env.DBNAME) || "";
exports.DBUSER = process.env.DBUSER || "";
exports.DBPASS = process.env.DBPASS || "";
