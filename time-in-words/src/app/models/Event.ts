// Should mirror Event Class in service layer
export class Event {

	id: number;
    name: string;
    location: string;
    date: string;
    h: number;
    m: number;

    constructor() {}

    public setAll(newEvent:Event):void{
		this.$id = newEvent.$id;
        this.$name = newEvent.$name;
        this.$location = newEvent.$location;
        this.$date = newEvent.$date;
        this.$h = newEvent.$h;
        this.$m = newEvent.$m;
    }

    //getters, setters===============

    //id=============

	public get $id(): number {
		return this.id;
	}

	public set $id(value: number) {
		this.id = value;
	}

    //name===========

    public get $name(): string {
        return this.name;
    }

    public set $name(value: string) {
        this.name = value;
    }

    //location===========

    public get $location(): string {
        return this.location;
    }

    public set $location(value: string) {
        this.location = value;
    }

    //date===========

    public get $date(): string {
        return this.date;
    }

    public set $date(value: string) {
        this.date = value;
    }

    //h===========

    public get $h(): number {
        return this.h;
    }

    public set $h(value: number) {
        this.h = value;
    }

    //m===========

    public get $m(): number {
        return this.m;
    }

    public set $m(value: number) {
        this.m = value;
    }
}