import * as React from 'react';

interface IEntry {
    setLocation: React.Dispatch<React.SetStateAction<string>>
}

const Entry: React.FunctionComponent<IEntry> = (props) => {
    const { setLocation } = props;
    const [input, setInput] = React.useState<string>('')
    
    return (<form onSubmit={(e) => { e.preventDefault(); setLocation(input) }}>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
    </form>)
}

export default Entry;