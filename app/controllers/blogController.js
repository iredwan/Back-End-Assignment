// controllers/blogController.js

export const createBlog = async (req, res) => {
   return res.status(201).json({ message: 'Blog created successfully' });
};

export const readBlog = async (req, res) => {
   return res.status(200).json({ message: 'Blog read successfully' });
};

export const updateBlog = async (req, res) => {
   return res.status(200).json({ message: 'Blog updated successfully' });
};

export const deleteBlog = async (req, res) => {
   return res.status(200).json({ message: 'Blog deleted successfully' });
};

