import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PlusCircleIcon, SaveIcon, TrashIcon } from "@heroicons/react/solid";
import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import { toast } from "react-toastify";

import FormikController from "../../components/global/FormikController";
import Layout from "../../components/global/Layout";
import Container from "../../components/ui/Container";
import { productSchema } from "../../validations/products";
import { insertDocument } from "../../utils/request";

const NewProductPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const newProduct = async (data) => {
    setIsSubmitting(true);
    await insertDocument("products", data);
    setIsSubmitting(false);
  };

  return (
    <Layout>
      <Container>
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-gray-700">New Product</h2>
          <Link
            to="/products"
            className="inline-block mt-1 text-sm text-amber-500 hover:underline"
          >
            Cancel
          </Link>
        </div>
        <div className="flex items-center justify-between pt-16 text-sm font-medium">
          <p>Product Information</p>
          <button
            disabled={isSubmitting}
            type="submit"
            form="product-form"
            className={`btn-submit ${isSubmitting && "disabled:opacity-75"}`}
          >
            <SaveIcon className="w-5 h-5" />

            <span>{isSubmitting ? "Saving..." : "Save"}</span>
          </button>
        </div>
        <Formik
          initialValues={{
            name: "",
            brand: "",
            release_date: "",
            category: "Men",
            sizes: [],
            colors: [],
            price: "",
            stocks: 0,
          }}
          validationSchema={productSchema}
          onSubmit={async (values) => {
            await newProduct(values);
            toast.success("Added successfully!");
            navigate("/products");
          }}
        >
          {({ values, handleSubmit, errors, touched }) => (
            <Form id="product-form" onSubmit={handleSubmit}>
              <div className="p-6 mt-8 space-y-5 bg-white rounded-md shadow-sm">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <FormikController
                    control="input"
                    name="name"
                    label="Name"
                    error={Boolean(errors.name && touched.name)}
                  />
                  <FormikController
                    control="input"
                    name="brand"
                    label="Brand"
                    error={Boolean(errors.brand && touched.brand)}
                  />

                  <FormikController
                    control="input"
                    type="date"
                    name="release_date"
                    label="Release Date"
                    error={Boolean(errors.release_date && touched.release_date)}
                  />
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

                <div className="grid gap-4 md:grid-cols-2">
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
                                  onClick={() => arrayHelpers.remove(index)}
                                >
                                  <TrashIcon className="w-4 h-4 text-red-500" />
                                </button>
                                <button
                                  type="button"
                                  onClick={() => arrayHelpers.insert(index, "")}
                                >
                                  <PlusCircleIcon className="w-4 h-4 text-green-500" />
                                </button>
                              </div>
                            ))
                          ) : (
                            <button
                              className="px-4 py-2 text-sm text-white bg-indigo-600 rounded-md"
                              type="button"
                              onClick={() => arrayHelpers.push("")}
                            >
                              Add a shoe sizes
                            </button>
                          )}
                          {errors.sizes && touched.sizes && (
                            <ErrorMessage
                              name="sizes"
                              component="div"
                              className="pointer-events-none error-msg"
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
                                  onClick={() => arrayHelpers.remove(index)}
                                >
                                  <TrashIcon className="w-4 h-4 text-red-500" />
                                </button>
                                <button
                                  type="button"
                                  onClick={() => arrayHelpers.insert(index, "")}
                                >
                                  <PlusCircleIcon className="w-4 h-4 text-green-500" />
                                </button>
                              </div>
                            ))
                          ) : (
                            <button
                              className="px-4 py-2 text-sm text-white bg-indigo-600 rounded-md"
                              type="button"
                              onClick={() => arrayHelpers.push("")}
                            >
                              Add a shoe colors
                            </button>
                          )}
                          {errors.colors && touched.colors && (
                            <ErrorMessage
                              name="colors"
                              component="div"
                              className="pointer-events-none error-msg"
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

export default NewProductPage;
