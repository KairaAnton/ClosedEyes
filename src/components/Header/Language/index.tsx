import './index.scss';


type LanguageProps = {
    className?:string
}

const Language: React.FC<LanguageProps> = ({className}) => {

    const languges:string[] = ['ENG', 'UK', 'PL'];

    return (
        <section className={`language ${className}`}>
            <span>{languges[0]}</span>
            <div className="language-container">
                {languges.map((str) => <span key={str}>{str}</span>)}
            </div>
        </section>
    );
}


export default Language;