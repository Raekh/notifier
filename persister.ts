import Model from './model';

class Persister<T extends Model> {
    persist = (obj: T) => {
        console.log('==> persist', obj);
    }
}

export default Persister;
