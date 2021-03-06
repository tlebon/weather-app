import * as React from 'react';
import './index.css';
interface IEntry {
    setLocation: React.Dispatch<React.SetStateAction<string>>
    error: string;
}

const Entry: React.FunctionComponent<IEntry> = (props) => {
    const { setLocation, error } = props;
    const [input, setInput] = React.useState<string>('');

    return (
        <form
            onBlur={() => setLocation(input)}
            onClick={() => setLocation(input)}
            onSubmit={(e) => { e.preventDefault(); setLocation(input); }}>
            <div className='weather-box'>
                <input autoComplete='addresslevel2'
                    onChange={(e) => setInput(e.target.value)}
                    placeholder='Input a city'
                    value={input} />
            </div>

            <div className='error'>{error}</div>
        </form>
    );
};

export default Entry;