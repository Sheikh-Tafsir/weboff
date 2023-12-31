import React, { useState } from 'react';
import '../../styles/create.css';
import { IoIosAddCircleOutline } from 'react-icons/io';
import axios from 'axios';
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
export const Create = () => {
    const [formData, setFormData] = useState({
        title: '',
        image: '',
        video: '',
        content: '',
        author: 'Admin', // Set the default author as 'Admin'
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setFormData({ ...formData, image: e.target.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Automatically generate the current date
        const currentDate = new Date().toISOString().split('T')[0];

        // Create the new blog post object
        const newBlogPost = {
            id: Math.random(), // You can generate a unique ID using a better method
            title: formData.title,
            author: formData.author,
            date: currentDate,
            content: formData.content,
            image: formData.image,
            video: formData.video,
        };

        uploadBlog(newBlogPost);
        // Send the new blog post to your API or data storage
        // For this example, let's assume you have a function to send data
        // to your server or save it in a JSON file
        // sendDataToServer(newBlogPost);

        // Clear the form after submission
        setFormData({
            title: '',
            image: '',
            video: '',
            content: '',
            author: 'Admin',
        });
    };

    const uploadBlog = async (newBlogPost) => {
      const apipath = `${import.meta.env.VITE_API_URI}/blogs/create`;
      //const apipath = `http://localhost:3001/project/create`;
      await axios.post(apipath,
      {
        newBlogPost:newBlogPost
      }
      ).then((response) =>{
          console.log(response.data);
      }).catch(error => {
        console.log(error);
      });
    }

    return (
      <>
      <Navbar/>
        <section className="newPost">
          <div className="container">
            <form className="form" onSubmit={handleSubmit}>
              <div className="image-container">
                <img
                  src="https://media.istockphoto.com/id/1198931639/photo/writing-a-blog-blogger-influencer-reading-text-on-screen.jpg?b=1&s=612x612&w=0&k=20&c=_C4iNvLOzKbbfbeTMsJ4mQf8OGQwYWJ8GWKLKRglrF8="
                  alt="UI Enhancement"
                  className="ui-enhancement-image"
                />
              </div>
              <h2>Create Blog Post</h2>
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Image Link</label>
                <input
                  type="url"
                  name="image"
                  value={formData.image}
                  onChange={handleInputChange}
                />
                {formData.image && (
                  <img
                    src={formData.image}
                    alt="Image Preview"
                    className="image-preview"
                  />
                )}
                <label className="inputfile">
                  <input
                    type="file"
                    onChange={handleImageChange}
                    accept="image/*"
                  />
                  <span>Upload Image</span>
                </label>
              </div>
              <div className="form-group">
                <label>Video Link (optional)</label>
                <input
                  type="url"
                  name="video"
                  value={formData.video}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Author</label>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Content</label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                />
              </div>
              <button type="submit" className="button">
                Create Post
              </button>
            </form>
          </div>
        </section>
        <Footer/>
        </>
      );      
    };