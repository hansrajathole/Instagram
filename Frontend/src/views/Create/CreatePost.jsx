import React, { useRef, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog";

const CreatePost = ({open , setOpen}) => {
    const navigate = useNavigate();
    const [media, setMedia] = useState(null);
    const [caption, setCaption] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const imageRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");
        const formData = new FormData(e.target);

        axios.post('http://localhost:3000/post/create', formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data"
            }
        })
            .then(response => {
                toast.success(response.data.message);
                setOpen(false)
            })
            .catch(error => {
                console.log(error);
                setError(error.response?.data?.message);
            });
    };

    const generateCaption = async () => {
        if (!media) {
            toast.error("Please select an image first!");
            return;
        }
        console.log(media);
        
        setLoading(true);
        const formData = new FormData();
        formData.append("media", media);
        const token = localStorage.getItem("token");

        try {
            const response = await axios.post("http://localhost:3000/ai/", formData,{
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data"
                }
            });
            setCaption(response.data.caption);
            toast.success("Caption Generated Successfully!");
        } catch (error) {
            console.log(error);
            toast.error("Failed to generate caption");
        } finally {
            setLoading(false);
        }
    };

    return (
        
        <Dialog open={open}  onOpenChange={setOpen}>
            <DialogContent>
                <DialogHeader className="text-center w-full flex justify-center items-center  ">Create New Post</DialogHeader>
                <form  className="w-full flex flex-col gap-4">
                    
                    <Input
                        accept='image/*'
                        name='media'
                        type="file"
                        onChange={(e) => setMedia(e.target.files[0])}
                        className="hidden"
                        ref={imageRef}
                    />
                    <button
                    onClick={() => imageRef.current.click()}
                    className='text-center flex justify-center cursor-pointer rounded-md p-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold '> Select image</button>
                    {/* <Input/> */}
                    <Button type="button" onClick={generateCaption} className="w-full py-2 bg-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-600 transition-all">
                        {loading ? 'Generating...' : 'Generate Caption'}
                    </Button>

                    <Label className="">Caption</Label>
                    <Textarea
                        name='caption'
                        value={caption}
                        onChange={(e) => setCaption(e.target.value)}
                        placeholder="Write a caption..."
                       
                    />

                    <button className="w-full cursor-pointer active:scale-95 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition-all" onClick={handleSubmit}>Share</button>
            

                    {error && <p className="text-red-500 text-xs text-center">{error}</p>}
                </form>
            </DialogContent>
        </Dialog>
     
    );
};

export default CreatePost;
