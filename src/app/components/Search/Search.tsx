import Button from '@/app/components/Button';
import Input from '@/app/components/Input';
import SearchIcon from '@/app/assets/images/svg/search.svg'
import './search.scss'

const Search = () => {

    return (
        <>
            <div className='searchBox flex items-center'>
                <div className="inputField lg:w-auto w-full" >
                    <div className="rounded-0 ">
                        <input
                            id="search"
                            type="text"
                            className="lg:w-52 w-full input-sm"
                        />
                    </div>
                </div>
                <Button
                    variant="btn-primary bg-primary border-primary"
                    iconPosition="left"
                    icon={SearchIcon}
                    size='btn-sm'
                ></Button>
            </div>
        </>
  );
};

export default Search;