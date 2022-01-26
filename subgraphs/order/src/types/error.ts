export interface Error {
    httpCode : number,
    businessCode: number,
    message: string,
    details?: [string],
    severity: string
}
export interface ErrorResponse {
    httpCode : number,
    businessCode: number,
    message: string,
    details?: [string],
}

export interface ErrorCodes { 
    [name: string]: { 
        [name: string]: Error
    } 
}

export interface ErrorOverride {
    businessCode?: number,
    httpCode? : number,
    message?: string,
    details?: [string] | any,
    severity?: string
}