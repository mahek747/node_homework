const { stationaryService } = require('../services');

/** bus module */
const createStationary = async (req, res) => {
    try {
        const reqBody = req.body;

        const stationary = await stationaryService.createStationary(reqBody);
        if (!stationary) {
            throw new Error("Something wents wrong , please try again or later !!");
        }

        res.status(200).json(
            {
                success: true,
                message: "stationary model created successfully",
                data: { stationary }
            }
        );
    } catch (error) {
        res.status(400).json(
            {
                success: false,
                message: error.message
            }
        );
    }
}

//  stationary list
const getStationaryList = async (req, res) => {
    try {
        const getList = await stationaryService.getStationaryList(req, res);

        res.status(200).json(
            {
                success: true,
                message: "Got stationary list successfully !!",
                data: { getList }
            }
        )
    } catch (error) {
        res.status(400).json(
            {
                success: false,
                message: error.message
            }
        );
    }
};

// delete hotel 
const deleteRecord = async (req, res) => {
    try {
        const stationaryId = req.params.stationaryId;
        const stationaryExists = await stationaryService.getStationaryList(stationaryId);
        if (!stationaryExists) {
            throw new Error("stationary not found !!");
        }

        await stationaryService.deleteStationary(stationaryId);

        res.status(200).json({
            success: true,
            message: "stationary deleted successfully !!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

module.exports = {
    createStationary,
    getStationaryList,
    deleteRecord
}