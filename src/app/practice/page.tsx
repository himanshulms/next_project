import Accordion from "@/app/components/Accordion";
import Badge from "@/app/components/Badge";
import Button from "@/app/components/Button";
import Dropdown from "@/app/components/Dropdown";
import Profile from "@/app/components/Dropdown";
import Input from "@/app/components/Input";
import InputChecks from "@/app/components/Input/InputChecks";
import Select from "@/app/components/Input/Select";
import Textarea from "@/app/components/Input/Textarea";
import SideBar from "@/app/components/Layout";
import Typography from "@/app/components/Typography";
import SearchIcon from "@/app/assets/images/svg/search.svg"
import ProfileImage from "@/app/assets/images/profile.png"
import Modal from "@/app/components/Modal";
import Search from "@/app/components/Search";
import BarCode from "@/app/assets/images/barcode.png"

export default function Practice() {
    return (
        <>
            {/* <SideBar /> */}

            

            <div className="p-4">

            Practices Page

            <div className="mt-4 mb-2">Modal</div>

            <Button
                variant="btn-secondary me-3"
            >
                Open Modal Demo
            </Button>

            <Modal 
                modalImage = {BarCode}
                modalText = {`Lorem Ipsum is simply dummy text of the printing 
and typesetting industry. `}
                btnPrimaryLabel = "print"  
                btnSecondaryLabel = "download"
            />

            
            <div className="mt-4 mb-2">Search</div>

            <Search />
            
            
            <div className="mt-4 mb-2">Typography</div>

            <div className="flex gap-4">
                
                <Typography
                    tag="h1"
                    className=""
                    size="text-3xl"  //need to change size
                    weight="font-black"
                    title="heading1"
                >
                    heading 1
                </Typography>

            </div>

            <div className="mt-4 mb-2">Button</div>
            <div className="flex gap-4">
                <Button
                    size=""
                    variant="btn-primary"
                    className=""
                    iconPosition="left"
                    icon={SearchIcon}
                    
                >
                    Search
                </Button>

                <Button
                    size=""
                    variant="btn-primary"
                    className=""
                    iconPosition="right"
                    icon={SearchIcon}
                >
                    Search
                </Button>

                <Button
                    size=""
                    variant="btn-primary"
                >
                    Primary
                </Button>

                <Button
                    size=""
                    variant="btn-secondary"
                >
                    Secondary
                </Button>

                <Button
                    size=""
                    variant="btn-outline"
                >
                    Outline
                </Button>
                
                <Button
                    size="btn-sm"
                    variant="btn-outline"
                >
                    Small button
                </Button>

                <Button
                    size="btn-lg"
                    variant="btn-outline"
                >
                    large button
                </Button>

            </div>

            <div className="mt-4 mb-2">Dropdown</div>

            <Dropdown title="Hello! Jerry Dansereau" />

            <div className="mt-4">Badge</div>

            <div className="gap-4 flex">
                <Badge
                    size="text-sm"
                    weight="font-normal"
                    color="badge-success"
                    className="min-w-24"
                >
                    Success
                </Badge>

                <Badge
                    size="text-sm"
                    weight="font-normal"
                    color="badge-warning"
                    className="min-w-24"
                >
                    Warning
                </Badge>

                <Badge
                    size="text-sm"
                    weight="font-normal"
                    color="badge-error"
                    className="min-w-24"
                >
                    Error
                </Badge>
            </div>

            <div className="mt-4 mb-2">Profile</div>

            <Profile
                title="Hello! Jerry Dansereau"
                profileImage={ProfileImage}
                position="Manager"
            />

            <div className="mt-4 mb-2">Accordion</div>

            <div className="join join-vertical w-full rounded-none">
                <Accordion
                    id="product"
                    title="Click to open this one and close others"
                    decs="hello"
                />
                <Accordion
                    id="product"
                    title="Click to open this one and close others"
                    decs="hello"
                />
            </div>

            <div className="mt-4 mb-2">Input</div>

            <Input
                id="name"
                type="text"
                label="Name"
                placeholder="Name"
            />

            <Input
                id="number"
                type="number"
                label="Number"
            />

            <Input
                id="email"
                type="email"
                label="Email"
            />

            <div className="mt-4 mb-2">Input Date</div>
            
            <Input
                id="name"
                type="date"
                label="Date"
            />

            <div className="mt-4 mb-2">Textarea</div>

            <Textarea
                id="name"
                label="Add Note"
            />

            <div className="mt-4 mb-2">Select</div>

            <Select
                label="Paper Board"
            />

            <div className="mt-4 mb-2">Input Radio</div>

            <InputChecks
                type="radio"
                id="vhical"
                label="car"
            />

            <InputChecks
                type="radio"
                id="vhical"
                label="bus"
            />

            <div className="mt-4 mb-2">Input Checkbox</div>

            <InputChecks
                type="checkbox"
                id="vhicalchecks"
                label="bus"
            />

            <InputChecks
                type="checkbox"
                id="vhicalchecks"
                label="car"
            />
            
            </div>
        </>
    );
}