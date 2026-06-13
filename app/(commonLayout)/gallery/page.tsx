import Image from 'next/image';
import nextImage from '../../../assests/football.avif'

const GalleryPage = () => {
    return (
        <div>
            <h1 className='text-4xl text-center py-4'>This is Gallery Page.</h1>

            <div className="text-center">
                <h1>Regular Image</h1>
                <img src="https://images.unsplash.com/photo-1542683305-710078a12f73?q=80&w=1157&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" width={500} height={500} className='mx-auto' />

                <h1>Next JS Image Component</h1>
                <Image 
                src={"https://images.unsplash.com/photo-1542683305-710078a12f73?q=80&w=1157&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                alt='image'
                width={500}
                height={500}
                className='mx-auto'
                />


                <h1>Local Next JS Image Component</h1>
                <Image 
                // src={nextImage}
                src='/football.avif'
                alt='image'
                width={500}
                height={500}
                className='mx-auto'
                />
            </div>
        </div>
    );
};

export default GalleryPage;