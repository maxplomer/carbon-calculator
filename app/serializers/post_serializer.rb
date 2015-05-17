class PostSerializer < ActiveModel::Serializer
  embed :ids, include: false
  attributes :id, :title, :link, :gal_of_gas_per_day, :gal_of_hotwater_per_day

  has_one :user

end