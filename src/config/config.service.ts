import Joi from '@hapi/joi';
import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';

@Injectable()
export class ConfigService {
  private readonly envConfig: EnvironmentConfig;

  constructor() {
    dotenv.config();
    this.envConfig = this.validateInput(process.env);
  }

  get<K extends keyof EnvironmentConfig>(key: K): EnvironmentConfig[K] {
    return this.envConfig[key];
  }

  private validateInput(envVars: NodeJS.ProcessEnv): EnvironmentConfig {
    const envVarsSchema = Joi.object({
      NODE_ENV: Joi.string().default('development'),
      HOST: Joi.string().required(),
      PORT: Joi.number().required(),

      DB_HOST: Joi.string().required(),
      DB_PORT: Joi.number().required(),
      DB_USERNAME: Joi.string().required(),
      DB_PASSWORD: Joi.string().required(),
      DB_NAME: Joi.string().required(),

      APP_FRONT_URL: Joi.string()
        .uri()
        .required(),
    }).options({
      stripUnknown: true,
    });

    const { error, value } = envVarsSchema.validate(envVars);

    if (error) {
      throw error;
    }

    return value;
  }
}

export interface EnvironmentConfig {
  PORT: number;
  HOST: string;

  DB_HOST: string;
  DB_PORT: number;
  DB_USERNAME: string;
  DB_PASSWORD: string;
  DB_NAME: string;

  APP_FRONT_URL: string;

  NODE_ENV: string;
}
