const { busService } = require('../services');

/** bus module */
const createBus = async (req, res) => {
    try {
        const reqBody = req.body;

        const bus = await busService.createBus(reqBody);
        if (!bus) {
            throw new Error("Something wents wrong , please try again or later !!");
        }

        res.status(200).json(
            {
                success: true,
                message: "bus model created successfully",
                data: { bus }
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

//  hotel list
const getBusList = async (req, res) => {
    try {
        const getList = await busService.getBusList(req, res);

        res.status(200).json(
            {
                success: true,
                message: "Got bus list successfully !!",
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

// delete bus
const deleteRecord = async (req, res) => {
    try {
        const busId = req.params.busId;
        const busExists = await busService.getBusList(busId);
        if (!busExists) {
            throw new Error("bus not found !!");
        }

        await busService.deleteBus(busId);

        res.status(200).json({
            success: true,
            message: "bus deleted successfully !!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

module.exports = {
    createBus,
    getBusList,
    deleteRecord
}