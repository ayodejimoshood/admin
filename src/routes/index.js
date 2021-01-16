import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import * as FeatherIcon from 'react-feather';
// import ViewRentalPackages from '../pages/rentalpackages/view'
import { isUserAuthenticated, getLoggedInUser } from '../helpers/authUtils';

// auth
const Login = React.lazy(() => import('../pages/auth/Login'));
const Logout = React.lazy(() => import('../pages/auth/Logout'));
const Register = React.lazy(() => import('../pages/auth/Register'));
const ForgetPassword = React.lazy(() => import('../pages/auth/ForgetPassword'));
const Confirm = React.lazy(() => import('../pages/auth/Confirm'));

// dashboard
const Dashboard = React.lazy(() => import('../pages/dashboard'));

// admin users
const AdminUsers = React.lazy(() => import('../pages/admin/users'));
// const AdminGroups = React.lazy(() => import('../admin/TravelDispatchUsers'));

// members
const Users = React.lazy(() => import('../pages/users'));
const Riders = React.lazy(() => import('../pages/riders'));
const Drivers = React.lazy(() => import('../pages/drivers'));
const Taxis = React.lazy(() => import('../pages/taxis'));

// company
const Company = React.lazy(() => import('../pages/company'));

// rentals
const RentalPackages = React.lazy(() => import('../pages/rentalpackages'));
const ViewRentalPackages = React.lazy(() => import('../pages/view'));

// vehicle type
const VehicleType = React.lazy(() => import('../pages/vehicletype'));
// const LogisticsVehicleType = React.lazy(() => import('../pages/vehicletype/logistics'));
// const TaxiVehicleType = React.lazy(() => import('../pages/vehicletype/taxi'));

const RideLaterBookings = React.lazy(() => import('../pages/ridelaterbookings'));
const Trips = React.lazy(() => import('../pages/trips'));
const Promocode = React.lazy(() => import('../pages/promocode'));

// pages
const Starter = React.lazy(() => import('../pages/other/Starter'));
const Profile = React.lazy(() => import('../pages/other/Profile/'));
const Activity = React.lazy(() => import('../pages/other/Activity'));
const Invoice = React.lazy(() => import('../pages/other/Invoice'));
const Pricing = React.lazy(() => import('../pages/other/Pricing'));
const Error404 = React.lazy(() => import('../pages/other/Error404'));
const Error500 = React.lazy(() => import('../pages/other/Error500'));

// ui
const BSComponents = React.lazy(() => import('../pages/uikit/BSComponents/'));
const FeatherIcons = React.lazy(() => import('../pages/uikit/Icons/Feather'));
const UniconsIcons = React.lazy(() => import('../pages/uikit/Icons/Unicons'));
const Widgets = React.lazy(() => import('../pages/uikit/Widgets/'));

// charts
const Charts = React.lazy(() => import('../pages/charts/'));

// forms
const BasicForms = React.lazy(() => import('../pages/forms/Basic'));
const FormAdvanced = React.lazy(() => import('../pages/forms/Advanced'));
const FormValidation = React.lazy(() => import('../pages/forms/Validation'));
const FormWizard = React.lazy(() => import('../pages/forms/Wizard'));
const FileUpload = React.lazy(() => import('../pages/forms/FileUpload'));
const Editor = React.lazy(() => import('../pages/forms/Editor'));

// tables
const BasicTables = React.lazy(() => import('../pages/tables/Basic'));
const AdvancedTables = React.lazy(() => import('../pages/tables/Advanced'));


// handle auth and authorization
const PrivateRoute = ({ component: Component, roles, ...rest }) => (
    <Route
        {...rest}
        render={props => {
            if (!isUserAuthenticated()) {
                // not logged in so redirect to login page with the return url
                return <Redirect to={{ pathname: '/account/login', state: { from: props.location } }} />;
            }

            const loggedInUser = getLoggedInUser();
            // check if route is restricted by role
            if (roles && roles.indexOf(loggedInUser.role) === -1) {
                // role not authorised so redirect to home page
                return <Redirect to={{ pathname: '/' }} />;
            }

            // authorised so return component
            return <Component {...props} />;
        }}
    />
);

// root routes
const rootRoute = {
    path: '/',
    exact: true,
    component: () => <Redirect to="/dashboard" />,
    route: PrivateRoute,
};

// dashboards
const dashboardRoutes = {
    path: '/dashboard',
    name: 'Dashboard',
    icon: FeatherIcon.Home,
    header: 'Navigation',
    badge: {
        variant: 'success',
        text: '1',
    },
    component: Dashboard,
    roles: ['Admin'],
    route: PrivateRoute
};

// admin users
const adminusersRoutes = {
    path: '/admin/users',
    name: 'Admin Users',
    icon: FeatherIcon.Users,
    header: 'Admin Members',
    component: AdminUsers,
    // icon: FeatherIcon.PieChart,
    roles: ['Admin'],
    route: PrivateRoute
};

// apps
const usersRoutes = {
    path: '/users',
    name: 'Users',
    header: 'App Members',
    component: Users,
    icon: FeatherIcon.Users,
    roles: ['Admin'],
    route: PrivateRoute
}
const ridersRoutes = {
    path: '/riders',
    name: 'Riders',
    component: Riders,
    icon: FeatherIcon.Users,
    roles: ['Admin'],
    route: PrivateRoute
}
const driversRoutes = {
    path: '/drivers',
    name: 'Drivers',
    component: Drivers,
    icon: FeatherIcon.Users,
    roles: ['Admin'],
    route: PrivateRoute
}
const drivertaxisRoutes = {
    path: '/taxis',
    name: 'Taxis',
    component: Taxis,
    icon: FeatherIcon.Truck,
    roles: ['Admin'],
    route: PrivateRoute
}

// company
const companyRoutes = {
    path: '/company',
    name: 'Company',
    header: 'Company',
    component: Company,
    icon: FeatherIcon.Clipboard,
    roles: ['Admin'],
    route: PrivateRoute
}

// rental
const rentalRoutes = {
    path: '/rentalpackages/index',
    name: 'Rental Packages',
    header: 'Rental Packages',
    component: RentalPackages,
    icon: FeatherIcon.CornerUpRight,
    roles: ['Admin'],
    route: PrivateRoute
}

const viewrentalRoutes = {
    path: '/rentalpackages/view',
    name: 'View/Edit Rentals',
    // header: 'View Rental Packages',
    // className: 'sulaimon',
    component: ViewRentalPackages,
    icon: FeatherIcon.Clipboard,
    roles: ['Admin'],
    route: PrivateRoute
}

// vehicle type
const vehicletypeRoutes = {
    path: '/vehicletype',
    name: 'Vehicle Type',
    header: 'Vehicle Type',
    component: VehicleType,
    icon: FeatherIcon.CornerUpRight,
    roles: ['Admin'],
    route: PrivateRoute,
    // children: [
    //     {
    //         path: '/vehicletype/taxi',
    //         name: 'Taxi',
    //         component: TaxiVehicleType,
    //         route: PrivateRoute,
    //         roles: ['Admin'],
    //     },
    //     {
    //         path: '/vehicletype/logistics',
    //         name: 'Logistics',
    //         component: LogisticsVehicleType,
    //         route: PrivateRoute,
    //         roles: ['Admin'],
    //     },
    // ]
}

// ride later bookings
const ridelaterbookingsRoutes = {
    path: '/ridelaterbookings',
    name: 'Ride Later Bookings',
    header: 'Trips',
    component: RideLaterBookings,
    icon: FeatherIcon.Bookmark,
    roles: ['Admin'],
    route: PrivateRoute
}

// trips
const tripsRoutes = {
    path: '/trips',
    name: 'Trips',
    component: Trips,
    icon: FeatherIcon.MapPin,
    roles: ['Admin'],
    route: PrivateRoute
}

// promocode
const promocodeRoutes = {
    path: '/promocode',
    name: 'Promo Code',
    header: 'Custom',
    component: Promocode,
    icon: FeatherIcon.Heart,
    roles: ['Admin'],
    route: PrivateRoute
}

const appRoutes = [adminusersRoutes, usersRoutes, ridersRoutes, driversRoutes, drivertaxisRoutes, companyRoutes, rentalRoutes, viewrentalRoutes, vehicletypeRoutes, ridelaterbookingsRoutes, tripsRoutes, promocodeRoutes];

// pages
// const pagesRoutes = {
//     path: '/pages',
//     name: 'Pages',
//     header: 'Custom',
//     icon: FeatherIcon.FileText,
//     children: [
//         {
//             path: '/pages/starter',
//             name: 'Starter',
//             component: Starter,
//             route: PrivateRoute,
//             roles: ['Admin'],
//         },
//         {
//             path: '/pages/profile',
//             name: 'Profile',
//             component: Profile,
//             route: PrivateRoute,
//             roles: ['Admin'],
//         },
//         {
//             path: '/pages/activity',
//             name: 'Activity',
//             component: Activity,
//             route: PrivateRoute,
//             roles: ['Admin'],
//         },
//         {
//             path: '/pages/invoice',
//             name: 'Invoice',
//             component: Invoice,
//             route: PrivateRoute,
//             roles: ['Admin'],
//         },
//         {
//             path: '/pages/pricing',
//             name: 'Pricing',
//             component: Pricing,
//             route: PrivateRoute,
//             roles: ['Admin'],
//         },
//         {
//             path: '/pages/error-404',
//             name: 'Error 404',
//             component: Error404,
//             route: Route
//         },
//         {
//             path: '/pages/error-500',
//             name: 'Error 500',
//             component: Error500,
//             route: Route
//         },
//     ]
// };


// components
const componentsRoutes = {
    path: '/ui',
    name: 'UI Elements',
    header: 'Components',
    icon: FeatherIcon.Package,
    children: [
        {
            path: '/ui/bscomponents',
            name: 'Bootstrap UI',
            component: BSComponents,
            route: PrivateRoute,
            roles: ['Admin'],
        },
        {
            path: '/ui/icons',
            name: 'Icons',
            children: [
                {
                    path: '/ui/icons/feather',
                    name: 'Feather Icons',
                    component: FeatherIcons,
                    route: PrivateRoute,
                    roles: ['Admin'],
                },
                {
                    path: '/ui/icons/unicons',
                    name: 'Unicons Icons',
                    component: UniconsIcons,
                    route: PrivateRoute,
                    roles: ['Admin'],
                },
            ]
        },
        {
            path: '/ui/widgets',
            name: 'Widgets',
            component: Widgets,
            route: PrivateRoute,
            roles: ['Admin'],
        },

    ]
};

// charts
const chartRoutes = {
    path: '/charts',
    name: 'Charts',
    component: Charts,
    icon: FeatherIcon.PieChart,
    roles: ['Admin'],
    route: PrivateRoute
}


// forms
const formsRoutes = {
    path: '/forms',
    name: 'Forms',
    icon: FeatherIcon.FileText,
    children: [
        {
            path: '/forms/basic',
            name: 'Basic Elements',
            component: BasicForms,
            route: PrivateRoute,
        },
        {
            path: '/forms/advanced',
            name: 'Advanced',
            component: FormAdvanced,
            route: PrivateRoute,
        },
        {
            path: '/forms/validation',
            name: 'Validation',
            component: FormValidation,
            route: PrivateRoute,
        },
        {
            path: '/forms/wizard',
            name: 'Wizard',
            component: FormWizard,
            route: PrivateRoute,
        },
        {
            path: '/forms/editor',
            name: 'Editor',
            component: Editor,
            route: PrivateRoute,
        },
        {
            path: '/forms/upload',
            name: 'File Upload',
            component: FileUpload,
            route: PrivateRoute,
        }
    ]
};


const tableRoutes = {
    path: '/tables',
    name: 'Tables',
    icon: FeatherIcon.Grid,
    children: [
        {
            path: '/tables/basic',
            name: 'Basic',
            component: BasicTables,
            route: PrivateRoute,
        },
        {
            path: '/tables/advanced',
            name: 'Advanced',
            component: AdvancedTables,
            route: PrivateRoute,
        }]
};


// auth
const authRoutes = {
    path: '/account',
    name: 'Auth',
    children: [
        {
            path: '/account/login',
            name: 'Login',
            component: Login,
            route: Route,
        },
        {
            path: '/account/logout',
            name: 'Logout',
            component: Logout,
            route: Route,
        },
        {
            path: '/account/register',
            name: 'Register',
            component: Register,
            route: Route,
        },
        {
            path: '/account/confirm',
            name: 'Confirm',
            component: Confirm,
            route: Route,
        },
        {
            path: '/account/forget-password',
            name: 'Forget Password',
            component: ForgetPassword,
            route: Route,
        },
    ],
};

// flatten the list of all nested routes
const flattenRoutes = routes => {
    let flatRoutes = [];

    routes = routes || [];
    routes.forEach(item => {
        flatRoutes.push(item);

        if (typeof item.children !== 'undefined') {
            flatRoutes = [...flatRoutes, ...flattenRoutes(item.children)];
        }
    });
    return flatRoutes;
};

// All routes
const allRoutes = [
    rootRoute,
    dashboardRoutes,
    ...appRoutes,
    // pagesRoutes,
    // componentsRoutes,
    // chartRoutes,
    // formsRoutes,
    // tableRoutes,
    authRoutes,
];

// const authProtectedRoutes = [dashboardRoutes, ...appRoutes];
const authProtectedRoutes = [dashboardRoutes, ...appRoutes];
const allFlattenRoutes = flattenRoutes(allRoutes);
export { allRoutes, authProtectedRoutes, allFlattenRoutes };
