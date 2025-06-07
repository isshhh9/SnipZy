/* eslint-disable no-var */
import { Connection } from "mongoose";

//Promise in javascript to esure that the connection is established before using it
declare global {
  var mongoose: {
    conn: Connection | null;
    promise: Promise<Connection> | null;
  };
}

export {};