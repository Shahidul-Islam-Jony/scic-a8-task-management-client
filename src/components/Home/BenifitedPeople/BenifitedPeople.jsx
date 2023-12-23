import teacher from '../../../assets/images/teacher.jpg'
import student from '../../../assets/images/student.jpg'
import developer from '../../../assets/images/developer.jpg'
import corporate from '../../../assets/images/corporate1.jpg'
import banker from '../../../assets/images/banker.jpg'

const BenifitedPeople = () => {
    return (
        <div className="my-14">
            <h2 className="text-5xl font-bold text-center">People Whom are Benifited</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-16'>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={developer} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Developer</h2>
                        <p>A developer can set his task and manage it ontime</p>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={teacher} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Teacher</h2>
                        <p>Teacher can set his task and manage it ontime</p>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={student} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Developer</h2>
                        <p>A Student can set his task and manage it ontime</p>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={banker} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Banker</h2>
                        <p>A Banker can set his task and manage it ontime</p>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={corporate} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Corporate professionals</h2>
                        <p>Corporate  pepople can set his task and manage it ontime</p>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={developer} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Developer</h2>
                        <p>A developer can set his task and manage it ontime</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BenifitedPeople;