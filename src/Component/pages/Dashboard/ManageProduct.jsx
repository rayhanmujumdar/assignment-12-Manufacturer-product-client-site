import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import axiosPrivate from '../../../axiosPrivate/axiosPrivate';
import auth from '../../../firebase/firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SingleManageProduct from './SingleManageProduct';

const ManageProduct = () => {
    const [user] = useAuthState(auth)
    const {data,isLoading,error,refetch} = useQuery('manageProduct',() => {
        const url = `http://localhost:5000/manageProduct?email=${user?.email}`
        return axiosPrivate.get(url)
    })
    if(error){
        toast.error(error.message,{
            id: 'error'
        })
        return <Loading className="text-black"></Loading>
    }
    if(isLoading){
        return <Loading className='text-black'></Loading>
    }
    const {data: products} = data
    return (
        <div>
            <h1 className='text-2xl font-semibold text-gray-600'>Manage My product</h1>
            <div className='grid xl:grid-cols-2 gap-4 mt-4 md:grid-cols-2'>
                {
                    products.map(product => <SingleManageProduct key={product._id} product={product}></SingleManageProduct>)
                }
            </div>
        </div>
    );
};

export default ManageProduct;