

function Avatar({size,person}) {
    const getImageUrl='https://i.imgur.com/'
    return (
        <div>
            <img 
            src={getImageUrl+person.imageId+ '.jpg'}
            art={person.name}
            width={size}
            height={size}
            />
        </div>
    );
}

export default Avatar;