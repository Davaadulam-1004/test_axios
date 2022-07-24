export const CountryDetail = ({country, onClick}) => {
    const onSelect = (e) => {
        e.preventDefault();
        onClick();
    }
    return (
        <dl>
            <dt>Name:</dt>
            <dd>
                <a href="/" onClick={onSelect}>{country.name}</a>
            </dd>
        </dl>
    )
}