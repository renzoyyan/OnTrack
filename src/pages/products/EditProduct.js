import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { PlusCircleIcon, TrashIcon } from "@heroicons/react/solid";
import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import { toast } from "react-toastify";

import FormikController from "../../components/global/FormikController";
import Layout from "../../components/global/Layout";
import Container from "../../components/ui/Container";
import { productSchema } from "../../validations/products";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import Spinner from "../../components/ui/Spinner";

const EditProductPage = () => {
  const [product, setProduct] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    setIsLoading((prev) => !prev);
    const getCurrentProduct = async () => {
      const id = params?.id;
      const productsRef = doc(db, "products", id);
      try {
        const docSnap = await getDoc(productsRef);

        if (docSnap.exists()) {
          const data = { id: docSnap.id, ...docSnap.data() };
          setProduct(data);
          setIsLoading((prev) => !prev);
          return data;
        }
        return null;
      } catch (error) {
        console.log(error.message);
      }
    };

    getCurrentProduct();
  }, []);

  if (isLoading) {
    return <Spinner loading={isLoading} />;
  }

  return (
    <Layout>
      <Container>
        <div className="flex items-center justify-between pt-8">
          <h2 className="text-3xl text-gray-700 font-bold">New Product</h2>
          <div className="flex items-center space-x-6 text-sm">
            <Link to="/products" className="text-amber-500 hover:underline">
              Back
            </Link>
            <button
              disabled={isSubmitting}
              type="submit"
              form="product-form"
              className={`px-10 py-2 text-sm font-medium text-white transition duration-150 bg-indigo-600 rounded-md focus:ring-offset-2 ring-2 ring-indigo-600 font-open-sans hover:bg-indigo-600/95 hover:ring-indigo-600/95 ${
                isSubmitting && "bg-indigo-600/85 ring-indigo-600/85"
              }`}
            >
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </div>
        </div>
        <Formik
          initialValues={{
            name: product.name ?? "",
            brand: product?.brand ?? "",
            release_date: product?.release_date ?? "",
            category: product?.category ?? "",
            sizes: product?.sizes ?? [],
            colors: product?.colors ?? [],
            price: product?.price ?? "",
            stocks: product?.stocks ?? 0,
          }}
          validationSchema={productSchema}
          onSubmit={async (values) => {
            const productsRef = doc(db, "products", params.id);
            try {
              setIsSubmitting((prev) => !prev);
              const updateProduct = await setDoc(productsRef, {
                ...values,
                last_updated: serverTimestamp(),
              });

              setIsSubmitting((prev) => !prev);
              toast.success("Updated successfully!");
              navigate("/products");
              return updateProduct;
            } catch (error) {
              toast.error(error.message);
            }
          }}
        >
          {({ values, handleSubmit, errors, touched }) => (
            <Form id="product-form" onSubmit={handleSubmit}>
              <div className="mt-8 bg-white p-6 shadow-sm rounded-md space-y-5">
                <div className="grid grid-cols-3 gap-x-4">
                  <FormikController
                    control="input"
                    name="name"
                    label="Name"
                    error={Boolean(errors.name && touched.name)}
                  />
                  <FormikController
                    control="select"
                    name="brand"
                    label="Brand"
                    value={values.brand}
                    options={["Nike", "Addidas"]}
                    placeholder="Nike"
                    error={Boolean(errors.brand && touched.brand)}
                  />
                  <FormikController
                    control="input"
                    type="date"
                    name="release_date"
                    label="Release Date"
                    error={Boolean(errors.release_date && touched.release_date)}
                  />
                </div>
                <div className="grid grid-cols-3 gap-x-4">
                  <FormikController
                    control="select"
                    name="category"
                    label="Category"
                    value={values.category}
                    options={["Men", "Women", "Unisex"]}
                  />
                  <FormikController
                    control="input"
                    name="price"
                    label="Price"
                    error={Boolean(errors.price && touched.price)}
                  />
                  <FormikController
                    control="input"
                    type="number"
                    name="stocks"
                    label="Stocks"
                    error={Boolean(errors.stocks && touched.stocks)}
                  />
                </div>
                <div className="grid grid-cols-2 gap-x-4">
                  <div>
                    <label htmlFor="sizes" className="label">
                      Sizes
                    </label>
                    <FieldArray
                      name="sizes"
                      render={(arrayHelpers) => (
                        <div className="space-y-6">
                          {values.sizes && values.sizes.length > 0 ? (
                            values.sizes.map((sizes, index) => (
                              <div
                                key={index}
                                className="flex items-center space-x-4"
                              >
                                <Field
                                  id="sizes"
                                  className="form-control"
                                  name={`sizes.${index}`}
                                />
                                <button
                                  type="button"
                                  onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                                >
                                  <TrashIcon className="text-red-500 w-4 h-4" />
                                </button>
                                <button
                                  type="button"
                                  onClick={() => arrayHelpers.insert(index, "")} // insert an empty string at a position
                                >
                                  <PlusCircleIcon className="text-green-500 w-4 h-4" />
                                </button>
                              </div>
                            ))
                          ) : (
                            <button
                              className="text-sm bg-indigo-600 text-white px-4 py-2 rounded-md"
                              type="button"
                              onClick={() => arrayHelpers.push("")}
                            >
                              {/* show this when user has removed all friends from the list */}
                              Add a shoe sizes
                            </button>
                          )}
                          {errors.sizes && touched.sizes && (
                            <ErrorMessage
                              name="sizes"
                              component="div"
                              className="error-msg pointer-events-none"
                            />
                          )}
                        </div>
                      )}
                    />
                  </div>
                  <div>
                    <label htmlFor="colors" className="label">
                      Colors
                    </label>
                    <FieldArray
                      name="colors"
                      render={(arrayHelpers) => (
                        <div className="space-y-6">
                          {values.colors && values.colors.length > 0 ? (
                            values.colors.map((colors, index) => (
                              <div
                                key={index}
                                className="flex items-center space-x-4"
                              >
                                <Field
                                  id="colors"
                                  className="form-control"
                                  name={`colors.${index}`}
                                />
                                <button
                                  type="button"
                                  onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                                >
                                  <TrashIcon className="text-red-500 w-4 h-4" />
                                </button>
                                <button
                                  type="button"
                                  onClick={() => arrayHelpers.insert(index, "")} // insert an empty string at a position
                                >
                                  <PlusCircleIcon className="text-green-500 w-4 h-4" />
                                </button>
                              </div>
                            ))
                          ) : (
                            <button
                              className="text-sm bg-indigo-600 text-white px-4 py-2 rounded-md"
                              type="button"
                              onClick={() => arrayHelpers.push("")}
                            >
                              {/* show this when user has removed all friends from the list */}
                              Add a shoe colors
                            </button>
                          )}
                          {errors.colors && touched.colors && (
                            <ErrorMessage
                              name="colors"
                              component="div"
                              className="error-msg pointer-events-none"
                            />
                          )}
                        </div>
                      )}
                    />
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </Container>
    </Layout>
  );
};

export default EditProductPage;