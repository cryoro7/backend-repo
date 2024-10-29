"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtSecret = exports.db = exports.admin = void 0;
const admin = __importStar(require("firebase-admin"));
exports.admin = admin;
const jwtSecret = "your_jwt_secret";
exports.jwtSecret = jwtSecret;
const firebaseConfig = {
  apiKey: "AIzaSyDR9jMyh32jyww54wAn2G4vHMEhSEAeqsY",
  authDomain: "ebuddy-test.firebaseapp.com",
  projectId: "ebuddy-test",
  storageBucket: "ebuddy-test.appspot.com",
  messagingSenderId: "860914138673",
  appId: "1:860914138673:web:548fd76d01382109d0df10",
};
admin.initializeApp(firebaseConfig);
const db = admin.firestore();
exports.db = db;
