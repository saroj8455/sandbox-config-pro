class Laptop {
	private _model: string;
	// private _price: number;
	constructor(model: string) {
		this._model = model;
	}

	get model(): string {
		return this._model;
	}

	set model(laptopModel: string) {
		this._model = laptopModel;
	}
}

const laptop = new Laptop('Macbook Pro M3 16 inch');
laptop.model = 'M3';

console.log(laptop.model);
