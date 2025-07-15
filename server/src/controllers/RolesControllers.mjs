import { client } from "../config/database.mjs";

const getAllRoles = async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM roles');
    res.json({
      success: true,
      data: result.rows,
      count: result.rows.length
    });
  } catch (error) {
    console.error('Error fetching roles:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch roles',
      error: error.message
    });
  }
};

export default getAllRoles