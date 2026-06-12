const CatchAllRoute = async ({params}: {params: Promise<{slug: string}>}) => {
    // console.log(await params);
    const {slug} = await params
    
    return (
        <div>
            <h1 className="text-4xl">Catch All Route Page ID: {slug}</h1>
        </div>
    );
};

export default CatchAllRoute;