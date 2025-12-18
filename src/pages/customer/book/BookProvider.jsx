import { useState } from "react";

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
];

export default function BookingCalendar() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [bookedSlots, setBookedSlots] = useState({});
  const [bookingStatus, setBookingStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSlotSelect = (slot) => {
    if (bookedSlots[selectedDate]?.includes(slot)) return;
    setSelectedSlot(slot);
  };

  const confirmBooking = () => {
    if (!selectedDate || !selectedSlot) return;

    setLoading(true);
    setBookingStatus("Pending");

    setTimeout(() => {
      setBookedSlots((prev) => ({
        ...prev,
        [selectedDate]: [...(prev[selectedDate] || []), selectedSlot],
      }));

      setLoading(false);
      setBookingStatus("Confirmed");
      setSelectedSlot(null);
    }, 1200);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Booking Calendar</h1>

      {/* Date Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-1">
          Select Date
        </label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => {
            setSelectedDate(e.target.value);
            setSelectedSlot(null);
            setBookingStatus(null);
          }}
          className="border p-2 rounded w-full"
        />
      </div>

      {/* Time Slots */}
      {selectedDate && (
        <div className="mb-6">
          <h2 className="font-semibold mb-2">Available Time Slots</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {timeSlots.map((slot) => {
              const isBooked = bookedSlots[selectedDate]?.includes(slot);
              const isSelected = selectedSlot === slot;

              return (
                <button
                  key={slot}
                  onClick={() => handleSlotSelect(slot)}
                  disabled={isBooked}
                  className={`p-2 rounded border text-sm transition ${
                    isBooked
                      ? "bg-gray-300 cursor-not-allowed"
                      : isSelected
                      ? "bg-blue-600 text-white"
                      : "bg-white hover:bg-blue-100"
                  }`}
                >
                  {slot}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Confirm Booking */}
      {selectedSlot && (
        <button
          onClick={confirmBooking}
          disabled={loading}
          className="bg-green-600 text-white px-6 py-2 rounded"
        >
          {loading ? "Confirming..." : "Confirm Booking"}
        </button>
      )}

      {/* Booking Status */}
      {bookingStatus && (
        <div className="mt-6 p-4 border rounded bg-green-50">
          <h3 className="font-semibold">Booking Status</h3>
          <p className="text-green-700">{bookingStatus}</p>
        </div>
      )}

      {/* Status Tracking */}
      {bookingStatus && (
        <div className="mt-4">
          <h4 className="font-medium">Track Status</h4>
          <ul className="text-sm mt-2 space-y-1">
            <li className={bookingStatus === "Pending" ? "font-bold" : ""}>
              🕒 Pending
            </li>
            <li className={bookingStatus === "Confirmed" ? "font-bold" : ""}>
              ✅ Confirmed
            </li>
            <li>🏁 Completed</li>
          </ul>
        </div>
      )}
    </div>
  );
}
