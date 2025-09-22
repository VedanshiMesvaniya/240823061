const Product = require('../models/productModel');

exports.store = async (req, res) => {
    Product.create(req.body)
        .then(newProduct => {
            res.status(201).send({ message: 'Product details', data: newProduct });
        })
        .catch(err => {
            res.status(500).send({ message: 'Error creating product', error: err });
        });
}

exports.index=async(req,res)=>{
    Product.findAll()
    .then(products=>{
        res.send({message:'Product details',data:products});
    })
    .catch(err=>{
        res.send({message:'Error retrieving products',error:err});
    }); 
}

exports.show=async(req,res)=>{
    const id=req.params.id;
    Product.findByPk(id)
    .then(product=>{
        if(product){
            res.send({message:'Product details',data:product});
        }   
        else{
            res.send({message:'Product not found'});
        }
    })
    .catch(err=>{
        res.send({message:'Error finding product',error:err});
    });
}

exports.update=async(req,res)=>{
    const id=req.params.id;
    Product.update(req.body,{where:{id:id}})
    .then(()=>{
        res.send({message:'Product updated successfully'});
    })
    .catch(err=>{
        res.send({message:'Error updating product',error:err});
    });
}

exports.destroy=async(req,res)=>{
    const id=req.params.id;
    Product.destroy({where:{id:id}})
    .then(()=>{
        res.send({message:'Product deleted successfully'});
    })
    .catch(err=>{
        res.send({message:'Error deleting product',error:err});
    });
}