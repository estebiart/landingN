import { useState, useEffect } from 'react';

export const useLikedProjects = () => {
  const [likedProjects, setLikedProjects] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('likedProjects');
    if (saved) {
      setLikedProjects(JSON.parse(saved));
    }
  }, []);

  const toggleLike = (projectId: string) => {
    setLikedProjects(prev => {
      const newLiked = prev.includes(projectId)
        ? prev.filter(id => id !== projectId)
        : [...prev, projectId];
      
      localStorage.setItem('likedProjects', JSON.stringify(newLiked));
      return newLiked;
    });
  };

  const isLiked = (projectId: string) => likedProjects.includes(projectId);

  return { likedProjects, toggleLike, isLiked };
};