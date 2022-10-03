class Model {
    id: string;

    constructor(params: Record<string, unknown> & {id: string}) {
        this.id = params.id;
    }
}

export default Model;
