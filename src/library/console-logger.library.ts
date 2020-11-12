// tslint:disable: no-console

class ConsoleLogger {
  log = (key: string, value: any) => console.log(key, value);
}

export default new ConsoleLogger();
