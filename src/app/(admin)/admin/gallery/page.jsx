'use client';

import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import Image from 'next/image';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MoreHorizontal, Trash2, Plus, Play } from 'lucide-react';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [showUploadFormVideo, setShowUploadFormVideo] = useState(false);  
  const [formData, setFormData] = useState({
    title: '',
    image: null,
  });
  const [videoFormData, setVideoFormData] = useState({
    title: '',
    video: '',
  });

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await fetch('/api/admin/gallery');
      if (!response.ok) {
        throw new Error('Failed to fetch gallery items');
      }
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error('Error fetching gallery items:', error);
      toast.error('Failed to fetch gallery items');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleVideoInputChange = (e) => {
    const { name, value } = e.target;
    setVideoFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, image: e.target.files[0] }));
    }
  };

  const extractYouTubeId = (url) => {
  try {
    const parsedUrl = new URL(url);
    const hostname = parsedUrl.hostname;

    // Case: https://www.youtube.com/watch?v=ID
    if (parsedUrl.searchParams.has('v')) {
      return parsedUrl.searchParams.get('v');
    }

    // Case: https://youtu.be/ID or https://youtube.com/shorts/ID
    const pathParts = parsedUrl.pathname.split('/');
    const possibleId = pathParts[pathParts.length - 1];
    
    return possibleId.length === 11 ? possibleId : null;
  } catch (error) {
    return null;
  }
};


  const handleImageSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.image) {
      toast.error('Title and image are required');
      return;
    }

    try {
      setIsUploading(true);
      const data = new FormData();
      data.append('title', formData.title);
      data.append('image', formData.image);

      const response = await fetch('/api/admin/gallery', {
        method: 'POST',
        body: data,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to upload image');
      }

      toast.success('Image uploaded successfully!', {
        duration: 4000,
        position: 'top-right',
        style: {
          background: '#10B981',
          color: '#fff',
          padding: '16px',
          borderRadius: '8px',
        },
      });

      setFormData({
        title: '',
        image: null,
      });
      setShowUploadForm(false);
      fetchImages();
    } catch (error) {
      console.error('Error uploading image:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to upload image', {
        duration: 4000,
        position: 'top-right',
        style: {
          background: '#EF4444',
          color: '#fff',
          padding: '16px',
          borderRadius: '8px',
        },
      });
    } finally {
      setIsUploading(false);
    }
  };

  const handleVideoSubmit = async (e) => {
    console.log('handleVideoSubmit called'); // Debug log
    e.preventDefault();
    
    if (!videoFormData.title || !videoFormData.video) {
      toast.error('Title and video link are required');
      return;
    }
    
    const video = videoFormData.video;

    console.log('Video URL:', video); // Debug log
    const videoId = extractYouTubeId(videoFormData.video);
    console.log('Extracted Video ID:', videoId); // Debug log
    
    if (!videoId) {
      toast.error('Please enter a valid YouTube URL');
      return;
    }

    console.log('Video ID:', videoId); // Debug log
    try {
      setIsUploading(true);
      
      const response = await fetch('/api/admin/gallery', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: videoFormData.title,
          video: video,
          videoId: videoId,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to upload video');
      }

      toast.success('Video uploaded successfully!', {
        duration: 4000,
        position: 'top-right',
        style: {
          background: '#10B981',
          color: '#fff',
          padding: '16px',
          borderRadius: '8px',
        },
      });

      setVideoFormData({
        title: '',
        video: '',
      });
      setShowUploadFormVideo(false);
      fetchImages();
    } catch (error) {
      console.error('Error uploading video:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to upload video', {
        duration: 4000,
        position: 'top-right',
        style: {
          background: '#EF4444',
          color: '#fff',
          padding: '16px',
          borderRadius: '8px',
        },
      });
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this item? This action cannot be undone.')) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/gallery?id=${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to delete item');
      }

      toast.success('Item deleted successfully!', {
        duration: 4000,
        position: 'top-right',
        style: {
          background: '#10B981',
          color: '#fff',
          padding: '16px',
          borderRadius: '8px',
        },
      });

      fetchImages();
    } catch (error) {
      console.error('Error deleting item:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to delete item', {
        duration: 4000,
        position: 'top-right',
        style: {
          background: '#EF4444',
          color: '#fff',
          padding: '16px',
          borderRadius: '8px',
        },
      });
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const handleFormToggle = (formType) => {
    if (formType === 'image') {
      setShowUploadForm(!showUploadForm);
      setShowUploadFormVideo(false);
      // Reset video form when switching
      setVideoFormData({ title: '', video: '' });
    } else {
      setShowUploadFormVideo(!showUploadFormVideo);
      setShowUploadForm(false);
      // Reset image form when switching
      setFormData({ title: '', image: null });
    }
  };

  // Separate handlers for showing forms
  const showImageForm = () => {
    setShowUploadForm(true);
    setShowUploadFormVideo(false);
    setVideoFormData({ title: '', video: '' });
  };

  const showVideoForm = () => {
    setShowUploadFormVideo(true);
    setShowUploadForm(false);
    setFormData({ title: '', image: null });
  };

  const hideAllForms = () => {
    setShowUploadForm(false);
    setShowUploadFormVideo(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Gallery</CardTitle>
          <div className='flex space-x-2'>
            <Button 
              onClick={showUploadForm ? hideAllForms : showImageForm}
              variant={showUploadForm ? "secondary" : "default"}
            >
              <Plus className="mr-2 h-4 w-4" />
              {showUploadForm ? 'Cancel' : 'Upload Image'}
            </Button>
            <Button 
              onClick={showUploadFormVideo ? hideAllForms : showVideoForm}
              variant={showUploadFormVideo ? "secondary" : "default"}
            >
              <Plus className="mr-2 h-4 w-4" />
              {showUploadFormVideo ? 'Cancel' : 'Upload Video'}
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {showUploadForm && (
            <form onSubmit={handleImageSubmit} className="mb-8 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Enter image title"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="image">Image</Label>
                <Input
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  required
                />
              </div>

              <Button type="submit" disabled={isUploading}>
                {isUploading ? 'Uploading...' : 'Upload Image'}
              </Button>
            </form>
          )}

          {showUploadFormVideo && (
            <form onSubmit={handleVideoSubmit} className="mb-8 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="videoTitle">Title</Label>
                <Input
                  id="videoTitle"
                  name="title"
                  value={videoFormData.title}
                  onChange={handleVideoInputChange}
                  placeholder="Enter video title"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="video">YouTube Video URL</Label>
                <Input
                  id="video"
                  name="video"
                  value={videoFormData.video}
                  onChange={handleVideoInputChange}
                  placeholder="Enter YouTube video URL (e.g., https://www.youtube.com/watch?v=...)"
                  required
                />
              </div>

              <Button type="submit" disabled={isUploading}>
                {isUploading ? 'Uploading...' : 'Upload Video'}
              </Button>
            </form>
          )}

          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Media</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Uploaded</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {images.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center">
                      No items found
                    </TableCell>
                  </TableRow>
                ) : (
                  images.map((item) => (
                    <TableRow key={item._id}>
                      <TableCell>
                        <div className="relative w-16 h-16">
                          {item.image ? (
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              className="object-cover rounded"
                            />
                          ) : item.video ? (
                            <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center">
                              <Play className="h-6 w-6 text-gray-600" />
                            </div>
                          ) : null}
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">{item.title}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          item.image ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {item.image ? 'Image' : 'Video'}
                        </span>
                      </TableCell>
                      <TableCell>{formatDate(item.createdAt)}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            {item.video && (
                              <DropdownMenuItem
                                onClick={() => window.open(`${item.video}`, '_blank')}
                              >
                                <Play className="mr-2 h-4 w-4" />
                                Watch Video
                              </DropdownMenuItem>
                            )}
                            <DropdownMenuItem
                              onClick={() => handleDelete(item._id)}
                              className="text-red-600"
                            >
                              <Trash2 className="mr-2 h-4 w-4" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Gallery;