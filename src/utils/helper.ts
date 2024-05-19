import { ErrorResponse, SuccessResponse } from "../types/types";

const success = (statusCode: number, message: string, result?: any): SuccessResponse => {
  return {
    status: true,
    statusCode,
    message,
    result,
  };
};

const error = (statusCode: number, message: string): ErrorResponse => {
  return {
    status: false,
    statusCode,
    message,
  };
};

export {
  success,
  error,
};


// class ApiResponse {
//   private statusCode: number;
//   private status: boolean;
//   private message: string;
//   private data: any;

//   constructor(statusCode: number, message: string, data?: any) {
//     this.statusCode = statusCode;
//     this.status = true;
//     this.message = message;
//     this.data = data;
//   }

//   public send(res: Response): Response {
//     return res.status(this.statusCode).json({
//       status: this.status,
//       message: this.message,
//       data: this.data,
//     });
//   }
// }

export enum Direction {
  TOWARDS = "TOWARDS",
  BACKWARDS = "BACKWARDS",
  UPWARDS = "UPWARDS",
  DOWNWARDS = "DOWNWARDS"
}

