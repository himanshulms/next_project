import Image from "next/image";
import Prev from "@/app/assets/images/svg/pagination_prev.svg"
import Next from "@/app/assets/images/svg/pagination_next.svg"
import './pagination.scss'
type PaginationProps = {

};

const Pagination = ({ }: PaginationProps) => {
    
    return (
        <>
            <div className={`mt-4 grid justify-end pagination`} >
                <div className="join">
                    <button className="join-item btn btn-primary btn-xsm rounded-0 disabled">
                        <Image src={Prev} alt="prev" />
                    </button>
                    <button className="join-item btn btn-active">1</button>
                    <button className="join-item btn ">2</button>
                    <button className="join-item btn">3</button>
                    <button className="join-item btn">4</button>
                    <button className="join-item btn btn-primary btn-xsm rounded-0">
                        <Image src={Next} alt="next" />
                    </button>
                </div>
            </div>
        </>
    );
};

export default Pagination;