import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProviders/AuthProviders';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    // const {email,displayName, photoURL} = user;
    // console.log(displayName)
    console.log(user)

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    }

    return (
        <div className='lg:px-52 py-5 '>
            <Navbar

                fluid={true}
                rounded={true}
            >
                <Navbar.Brand href="https://flowbite.com/">
                    
                    <span className="self-center whitespace-nowrap text-4xl  font-bold text-gray-700">
                    Shaolin Recipes
                    </span>
                </Navbar.Brand>
                <div className="flex items-center gap-5 md:order-2">
                    {user && <Dropdown
                        arrowIcon={false}
                        inline={true}
                        label={<Avatar alt="User settings" img={user.photoURL ? user?.photoURL : 'https://e7.pngegg.com/pngimages/798/436/png-clipart-computer-icons-user-profile-avatar-profile-heroes-black-thumbnail.png'} rounded={true} />}
                    >
                        <Dropdown.Header>
                            <span className="block font-semibold text-sm">
                             {user.displayName}
                            </span>
                            <span className="block truncate text-sm font-medium">
                                {user.email}
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item>
                            Dashboard
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Settings
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Earnings
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>
                        <Link to='/login'><Button onClick={handleLogout}>Sign Out</Button></Link>
                        </Dropdown.Item>
                    </Dropdown>}

                    {!user &&  <Link to='/login'><Button>Login</Button></Link>}
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link
                        href="/"
                        active={true}
                    >
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        About
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        Services
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        Pricing
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        Contact
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;