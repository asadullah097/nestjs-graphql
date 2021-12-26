
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface Employee {
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    designation?: Nullable<string>;
    city?: Nullable<string>;
}

export interface IQuery {
    employee(): Nullable<Employee> | Promise<Nullable<Employee>>;
}

export interface IMutation {
    addEmployee(firstName?: Nullable<string>, lastName?: Nullable<string>, designation?: Nullable<string>, city?: Nullable<string>): Nullable<Employee> | Promise<Nullable<Employee>>;
}

type Nullable<T> = T | null;
