"use client";
import { FaTrash } from "react-icons/fa";
import { deleteProductAction } from "@/app/actions/products";
import MiniLoader from "@/app/components/MiniLoader";
import { useEffect, useState } from "react";

const DeleteProduct = ({ id }: { id: string }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  // showing modal on delete
  const handleDeleteClick = () => {
    setShowConfirm(true);
  };

  // closing modal
  const handleCancel = () => {
    setShowConfirm(false);
  };

  // deletion product logic
  const handleConfirm = async () => {
    try {
      setLoading(true);
      await deleteProductAction(id);
      setShowConfirm(false);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  // closing modal on escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowConfirm(false);
      }
    };
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <>
      <button type="button" onClick={handleDeleteClick}>
        <FaTrash />
      </button>
      {showConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60">
          <div className="bg-white p-4 rounded shadow-md space-y-4">
            <p>Are you sure you want to delete the product?</p>
            <div className="flex gap-3 items-center justify-center">
              <button onClick={handleCancel}>cancel</button>
              <button
                onClick={handleConfirm}
                disabled={loading}
                className="text-red-500"
              >
                {loading ? <MiniLoader /> : "delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteProduct;
