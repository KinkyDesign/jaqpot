/**
 * Jaqpot API
 * Jaqpot v4 (Quattro) is the 4th version of a YAQP, a RESTful web service which can be used to train machine learning models and use them to obtain toxicological predictions for given chemical compounds or engineered nano materials. The project is written in Java8 and JEE7.
 *
 * OpenAPI spec version: 4.0.3
 * Contact: hampos@me.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { MetaInfo } from './metaInfo';


export interface User {
    meta?: MetaInfo;

    ontologicalClasses?: Array<string>;

    visible?: boolean;

    temporary?: boolean;

    featured?: boolean;

    name?: string;

    mail?: string;

    hashedPass?: string;

    capabilities?: { [key: string]: number; };

    publicationRatePerWeek?: { [key: string]: number; };

    profilePic?: string;

    organizations?: Array<string>;

    _id?: string;

    occupation?: string;

    occupationAt?: string;

    about?: string;

    linkedin?: string;

    github?: string;

    twitter?: string;

    website?: string;

    cv?: string;

    livesAtCity?: string;
    
    livesAtCountry?: string;

}