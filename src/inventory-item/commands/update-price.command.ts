export class UpdatePriceCommand {
  constructor(
    public readonly itemId: string,
    public readonly newPrice: number,
  ) {}
}
