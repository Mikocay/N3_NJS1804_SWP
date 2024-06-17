using Microsoft.AspNetCore.Mvc;
using swp391_debo_be.Dto.Implement;
using swp391_debo_be.Entity.Implement;

namespace swp391_debo_be.Dao.Interface
{
    public interface IAppointmentDao
    {
        public object GetAppointmentByPagination(string page, string limit, Guid userId);
        public List<object> GetAppointmentsByStartDateAndEndDate(DateOnly startDate,DateOnly endDate, Guid Id);
        public List<int> GetApppointmentsByDentistIdAndDate(Guid dentistId, DateOnly date);
        public Appointment CreateAppointment(Appointment dto);
        public Appointment CancelAppointment(Guid appointmentId);
        public Task<List<AppointmentHistoryDto>> GetHistoryAppointmentByUserID(Guid id);
        public Task<List<AppointmentHistoryDto>> ViewAllAppointment(int page, int limit);
        public List<object> GetAppointmentsByStartDateAndEndDateOfDentist(DateOnly startDate, DateOnly endDate, Guid Id);
        public Task<List<AppointmentHistoryDto>> GetAppointmentByDentistId(int page, int limit, Guid dentistId);
    }
}
