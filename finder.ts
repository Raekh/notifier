import Model from './model';

class Finder<T extends Model> {
    findOrFail = ({ id }: { id: string }): T => {
        console.log('test');
        return {
            id: id,
        } as T;
    }
}

export default Finder;
