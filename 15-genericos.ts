function identity<T>(value: T): T {
  console.log(value);
  return value;
}

identity<string>("Hola");
identity<number>(2)
identity<boolean>(true);