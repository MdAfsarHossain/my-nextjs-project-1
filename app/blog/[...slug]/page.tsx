const CatchAllRoutePage = async ({params}: {params: Promise<{slug: string[]}>}) => {
    console.log(await params);
    const {slug} = await params;
    console.log(slug);
    
    
    return (
        <div>
            <h1 className='text-4xl'>Catch All Route Page : {}</h1>
        </div>
    );
};

export default CatchAllRoutePage;