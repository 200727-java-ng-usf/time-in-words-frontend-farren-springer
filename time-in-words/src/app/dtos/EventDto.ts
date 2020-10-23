// Should mirror EventDto Class in service layer
export class Event {

	id: number;
    name: string;
    location: string;
    date: string;
    hourWord: string;
    minuteWord: string;

    constructor() {}

    public setAll(newEvent:Event):void{
		this.$id = newEvent.$id;
        this.$name = newEvent.$name;
        this.$location = newEvent.$location;
        this.$date = newEvent.$date;
        this.$hourWord = newEvent.$hourWord;
        this.$minuteWord = newEvent.$minuteWord;
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

    public get $hourWord(): string {
        return this.hourWord;
    }

    public set $hourWord(value: string) {
        this.hourWord = value;
    }

    //m===========

    public get $minuteWord(): string {
        return this.minuteWord;
    }

    public set $minuteWord(value: string) {
        this.minuteWord = value;
    }
}