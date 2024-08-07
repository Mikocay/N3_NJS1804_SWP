import MiniHeader from "@/pages/Admin/components/MiniHeader/MiniHeader";
import { Box } from "@mui/material";
import ChecklistIcon from "@mui/icons-material/Checklist";
import AppointmentDetail from "@/components/Appointment/AppointmentDetail/AppointmentDetail";

function DentistAppointmentNotes() {
    return (
        <Box sx={{ p: '24px' }}>
            <MiniHeader content="Appointment Notes" IconComponent={ChecklistIcon} />
            <AppointmentDetail />
        </Box>
    )
}

export default DentistAppointmentNotes;