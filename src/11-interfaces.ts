export interface Driver {
  database: string;
  password: string;
  port: number;

  connect(): void;
  disconnect(): void;
  isConnected(): boolean;
}

const driver: Driver = {
  database: 'mydb',
  password: 'password',
  port: 5432,
  connect() {
    console.log('Connecting to database...');
  },
  disconnect() {
    console.log('Disconnecting from database...');
  },
  isConnected() {
    return true;
  },
};

export class PostgresDriver implements Driver {
  database: string;
  password: string;
  port: number;

  constructor(database: string, password: string, port: number) {
    this.database = database;
    this.password = password;
    this.port = port;
  }

  connect() {
    console.log('Connecting to Postgres...');
  }

  disconnect() {
    console.log('Disconnecting from Postgres...');
  }

  isConnected() {
    return true;
  }
}

export class OracleDriver implements Driver {
  database: string;
  password: string;
  port: number;

  constructor(database: string, password: string, port: number) {
    this.database = database;
    this.password = password;
    this.port = port;
  }

  connect(): void {
    console.log('Connecting to Oracle...');
  }

  disconnect(): void {
    console.log('Disconnecting from Oracle...');
  }

  isConnected(): boolean {
    return true;
  }
}
