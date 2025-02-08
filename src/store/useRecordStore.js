import { create } from "zustand";

const useRecordStore = create((set) => ({
  records: [],
  addRecord: (record) => {
    set((state) => ({ records: [...state.records, record] }));
  },
  removeRecord: (id) => {
    set((state) => ({
      records: state.records.filter((record) => record.id !== id),
    }));
  },
  updateRecord: (id, newQuantity) => {
    set((state) => ({
      records: state.records.map((record) =>
        record.id === id
          ? {
              ...record,
              quantity: record.quantity + newQuantity,
              cost: (record.quantity + newQuantity) * record.product.price,
            }
          : record
      ),
    }));
  },
  resetRecord: () => {
    set({ records: [] });
  },
}));

export default useRecordStore;
